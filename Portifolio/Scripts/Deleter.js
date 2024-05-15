
function Deleter(id){

    const datas = JSON.parse( localStorage.getItem("datas") ) || []

    const newdatas = datas.filter(datas => datas.id != id)

    localStorage.setItem("datas", JSON.stringify(newdatas))

    document.querySelector('#' + id).remove()

}