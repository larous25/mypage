/** NOTA:
* index
* - renderisar la pagina
* /cv
* - recibir solicitud de descarga del pdf con una contraseña
* /api/contacts
* - recibir los datos del formulario contacto
* /api/knewledges
* - enviar opciones de de conocimiento
* /login
* /api/knewledges
* - recibir opciones de conocimiento
* /api/contacts
* - ver datos de contacto
* /api/visits
* - ver cantidad de visitas o peticiones
* /admin
* - crea un admintrador
* /api/coupons
* - crear cupones y ver cupones
*/

const options = require('./options')

const fs = require('fs')
const path = require('path')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const express = require('express')
const jwt = require('jsonwebtoken')
const bodyparser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const app = express()

app.use(helmet())
app.use(cors())
app.use('/static', express.static(path.join(__dirname, './dist/static')))
app.use(bodyparser.json())

const { createServer } = require('http')

const port = 5000

let totalSchema = mongoose.Schema({
  _id: { type: String, required: true },
  total: { type: Number, default: 1 }
}, {
  timestamps: true
})

const TotalModel = mongoose.model('total', totalSchema)

let visitsSchema = mongoose.Schema({
  quantity: { type: Number, default: 0 },
  ip: { type: String, default: '' }
}, {
  timestamps: true
})

visitsSchema.pre('save', async function preSave (next) {
  try {
    let c = await TotalModel.findOne({ _id: 'counter' })
    if (!c) {
      c = new TotalModel({ _id: 'counter' })
    } else {
      c.total++
    }

    await c.save()
    next()
  } catch (error) {
    next(error)
  }
})

const VisitsModel = mongoose.model('visits', visitsSchema)

const couponsSchema = new mongoose.Schema({
  code: { type: String, required: true, trim: true },
  used: { type: Number, default: 0 },
  limit: { type: Number, default: 0, required: true }
})

couponsSchema.path('code').validate({
  validator (v) { return v.length > 9 },
  message (props) {
    return `${props.path} deberita tener almenos 9 dijitos`
  }
})

const CouponModel = mongoose.model('coupons', couponsSchema)

//
const knewledgeSchema = new mongoose.Schema({
  branch: { type: String, required: true },
  leaves: { type: [String], default: [] }
},
{ timestamps: true })

const KnewledgeModel = mongoose.model('knewledge', knewledgeSchema)

const contactsSchema = mongoose.Schema({
  name: { type: String, required: true },
  telephone: { type: String, required: true, min: 7, max: 15 },
  issue: { type: String, required: true, max: 180 }
}, { timestamps: true })

const ContactsModel = mongoose.model('contacts', contactsSchema)

app.get('/', function index (req, res, next) {
  let root = './dist/index.html'
  res.sendFile(path.join(__dirname, root))
})

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, match: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.([a-zA-Z{2,4}])+$/, 'porfavor use un email valido'] },
  pass: { type: String, required: true }
}, { timestamps: true })

userSchema.pre('save', async function savePass (next) {
  try {
    let salt = await bcrypt.genSalt(10)
    let hast = await bcrypt.hash(this.pass, salt)
    this.pass = hast
    next()
  } catch (error) {
    next(error)
  }
})

const UserModel = mongoose.model('user', userSchema)

const auth = async (req, res, next) => {
  try {
    let { authorization } = req.headers

    // if not exits head
    if (!authorization) {
      let err = new Error('no tiene cabecera')
      err.statusCode = 400
      throw err
    }

    const payload = jwt.verify(authorization, options.mySecret)

    // if head no have a user
    if (!payload.user) {
      let err = new Error('no tiene permiso')
      err.statusCode = 403
      throw err
    }

    let query = { _id: payload.user._id }
    let user = await UserModel.find(query).exec()

    if (!user) {
      let err = new Error(`no tiene permiso compa'`)
      err.statusCode = 403
      throw err
    }

    req.user = user
    return next()
  } catch (error) {
    return next(error)
  }
}

app.post('/cv', async function readCv (req, res, next) {
  try {
    let { code } = req.body
    if (code) throw new Error('es necesaria la clave')

    let pass = await CouponModel.find({ code }).exec()
    if (!pass) throw new Error('no existe esa clave')
    if (pass.limit < pass.used) throw new Error('la clave a sido usada demaciadas veces')

    pass.used++
    await pass.save()

    let filepath = `../private/${options.file}`
    let fileStream = fs.createReadStream(filepath)
    let filename = encodeURIComponent(filepath)

    res.setHeader('Content-disposition', `inline; filename="${filename}"`)
    res.contentType('application/pdf')
    fileStream.pide(res)
  } catch (error) {
    next(error)
  }
})

app.post('/api/contacts', async function createContact (req, res, next) {
  try {
    let { name, telephone, issue } = req.body
    let contactsDoct = new ContactsModel({ name, telephone, issue })
    await contactsDoct.save()
    res.status(201).json(contactsDoct)
  } catch (error) {
    next(error)
  }
})

// crear administrador
app.post('/admin', async function createAdmin (req, res, next) {
  try {
    let exists = await UserModel.findOne({}).exec()
    if (exists) throw new Error('Ya existe un admin mi pez')
    let { email, pass } = req.body
    if (!email || !pass) throw new Error('Son necesarios los parametros =)')
    let user = await new UserModel({ email, pass }).save()
    res.send(user)
  } catch (error) {
    next(error)
  }
})

app.post('/login', async function login (req, res, next) {
  let { email, pass } = req.body
  try {
    if (!email || !pass) throw new Error('es necesario un email o pass')

    let user = await UserModel.findOne({ email }).exec()

    let msgFail = 'que paso? user - pass fail'
    let compare = await bcrypt.compare(pass, user.pass)
    if (!user || !compare) {
      let err = new Error(msgFail)
      err.statusCode = 401
      throw err
    }

    delete user.pass
    delete user.__v
    let token = await jwt.sign({ user }, options.mySecret, { expiresIn: '1d' })
    res.json({ token })
  } catch (error) {
    next(error)
  }
})

app.get('/api/visits', auth, async function allvisits (req, res, next) {
  try {
    let visits = await VisitsModel.find({})
    let counter = await TotalModel.find({})
    res.send({ visits, counter })
  } catch (error) {
    next(error)
  }
})

app.get('/api/contacts', auth, async function readContact (req, res, next) {
  try {
    let contacts = await ContactsModel.find({}).exec()
    res.json({ contacts })
  } catch (error) {
    next(error)
  }
})

app.get('/api/knewledges', async function readKnewledge (req, res, next) {
  try {
    let knewledges = await KnewledgeModel.find({}).exec()
    res.json({ knewledges })
  } catch (error) {
    next(error)
  }
})

app.post('/api/knewledges', auth, async function createknewledge (req, res, next) {
  try {
    let { branch, leaves } = req.body

    let knewDocument = new KnewledgeModel({ branch, leaves })
    await knewDocument.save()

    res.status(201).json(knewDocument)
  } catch (error) {
    next(error)
  }
})

app.get('/api/coupons', auth, async function couponsRead (req, res, next) {
  try {
    let coupons = await CouponModel.find({}).exec()
    res.json({ coupons })
  } catch (error) {
    next(error)
  }
})

app.post('/api/coupons', auth, async function couponsCreate (req, res, next) {
  try {
    let { code, times } = req.body
    if (!code) throw new Error('es necesario el codigo')
    let cuopon = await new CouponModel({ code, times }).save()
    res.status(201).json(cuopon)
  } catch (error) {
    next(error)
  }
})

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/mypage', { useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.error('conexion mongo')
})
mongoose.connection.on('error', error => {
  console.error('error en mongo:', error)
  process.exit(1)
})

app.use(function errorHandler (err, req, res, next) {
  console.error('este es de la aplicacion Express', err)
  res.status(err.statusCode || 400).json({
    message: err.message
  })
})

const server = createServer(app)
server.listen(port)

server
  .on('request', async function requestHandle (req, res) {
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
    try {
      let client = await VisitsModel.findOne({ ip }).exec()
      if (!client) {
        await new VisitsModel({ ip }).save()
      } else {
        client.quantity++
        await client.save()
      }
    } catch (error) {
      throw error
    }
  })
  .on('listening', async () => {
    console.log(`corriendo servidor: ${port}`)
  })

// por si todo falla
process
  .on('uncaughtException', err => {
    console.error('fatal error en:  ', err)
    process.exit(1)
  })
  .on('unhandledRejection', (err, p) => {
    console.error(`a ocurrido en la funcion ${p} el siguiente error: `, err.message)
    process.exit(1)
  })

/**
   * esto cuando tenga mas tiempito lo guardo en otro lugar
         conocimientos: {
        NodeJS: ['Frameworks: expressjs, ', 'npm'],
        DBMS: ['Mongdb', 'MYSQL', 'SQLite'],
        Test: ['mochajs', 'avajs', 'chaijs'],
        HTML_5: ['web semantica'],
        CSS_3: [
          'Animaciones',
          'Media query',
          'Maquetación desde psd',
          'Frameworks: bootstrap'
        ],
        JavaScript: [
          'Manejo del Dom',
          'Manejo del Bom',
          'Ajax',
          'Frameworks: Jquery, Vuejs 2, React',
          'Herramientas: webpack, eslint'
        ],
        Otros: ['SSH', 'Git', 'Manejo Terminal']
      }
  */
