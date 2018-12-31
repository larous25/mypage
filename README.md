# my mini page

> a personal web page
> of brian bustos



## Build Setup

``` bash
# instalar dependencias
npm install
# el servidor en desarrollo del spa :8080
npm run dev
# construcion del spa minificado para produccion
npm run build
# build for production and view the bundle analyzer report
npm run build --report
# corre servidor con el puerto :5000 (es necesario crear un options que esporte un nombre para un pdf y clave)
npm run server

```


Al correr por primera vez el servidor  lo mas recomendable es ir a la siguiente ruta `hostname/creation`
donde se encuentra un formulario que pedirá un correo electrónico y una contraseña que son los datos
del único admin, estos datos deben escribirse cuidadosamente y ser recordados por que no se puede crear
otro o editar ( a menos que se elimine directo en la base de datos)

el siguiente paso es entrar a la siguiente ruta `/admin` aqui se puede editar y crear los conocimientos y cupones, también puedes ver las solicitudes de contacto que se enviaron
y la cantidad de visitas que se ha recibido
