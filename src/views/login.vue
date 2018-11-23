<template>
  <div class="container py-5">
    <div class="row">
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-6 mx-auto">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="mb-0">Bienvenido Maestro</h3>
                        </div>
                        <div class="card-body">
                            <form class="form" role="form" autocomplete="off" id="formLogin" novalidate="" method="POST">
                                <div class="form-group">
                                    <label for="uname1">Nombre</label>
                                    <input type="text" class="form-control form-control-lg rounded-0" name="uname1" id="uname1" required="">
                                    <div class="invalid-feedback">Pendiente</div>
                                </div>
                                <div class="form-group">
                                    <label>Palabras magicas</label>
                                    <input type="password" class="form-control form-control-lg rounded-0" id="pwd1" required="" autocomplete="new-password">
                                    <div class="invalid-feedback">...</div>
                                </div>
                                <div>
                                    <label class="custom-control custom-checkbox">
                                      <input type="checkbox" class="custom-control-input">
                                      <span class="custom-control-indicator"></span>
                                      <span class="custom-control-description small text-dark">Recuerdame esclavo</span>
                                    </label>
                                </div>
                                <button type="submit" class="btn sesamo" id="btnLogin">Ábrete, <br> Sésamo!</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {

}
</script>
<style>
.card {
  border: none;
  border-radius: 20px;
}
.card, input.form-control {
  background-color: whitesmoke;
}
.card-header {
  border-radius: 20px 20px 0 0;
}
.card-header, input.form-control {
  border: none;
  border-bottom: 3px solid white;
}
button.sesamo {
  border-radius: 50%;
  z-index: 2;
  position: absolute;
  top: 50%;
  right: -10%;
  border: 3px solid white;
}
</style>
