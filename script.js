document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

// document.querySelector("#qtde").addEventListener("change", atualizarPreco)
// document.querySelector("#js").addEventListener("change", atualizarPreco)
// document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
// document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
// document.querySelector("#prazo").addEventListener("change", function () {
//     const prazo = document.querySelector("#prazo").value
//     document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
//     atualizarPreco()
// })

function atualizarPreco(){
    const qtde = document.querySelector("#qtde").value
    const temJS = document.querySelector("#js").checked
    const incluiLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value
  
    let preco = qtde * 100;
    if (temJS) preco *= 1.1
    if (incluiLayout) preco += 500
    let taxaUrgencia = 1 - prazo*0.1;
    preco *= 1 + taxaUrgencia
   
    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}
window.onload = initPage;
    function initPage() {
        var behavior = function (val) {
            return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
        },
        options = {
            onKeyPress: function (val, e, field, options) {
                field.mask(behavior.apply({}, arguments), options);
            }
        };
        
        $('#phone').mask(behavior, options);
    }
function verificaContato(){

    $("#nome").val(null)
    $("#phone").val(null)
    $("#email").val(null)
    $("#message").val(null)
    Swal.fire(
        'Sucesso!',
        'E-mail enviado.',
        'success'
      )
}

