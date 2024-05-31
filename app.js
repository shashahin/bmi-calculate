const form = document.querySelector('form')


form.addEventListener('submit',function(e){
     e.preventDefault()
    const height = parseInt(document.getElementById('height').value)
    const weight = parseInt(document.getElementById('weight').value)
    const result = document.querySelector('#result')

    if(height === '' || height< 0 || isNaN(height)){
        result.innerHTML = `plase enter a valid height ${height}`
    }else if(weight === '' || weight< 0 || isNaN(weight)){
        result.innerHTML = `plase enter a valid weight ${weight}`
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)

        result.innerHTML = `<span>${bmi}</span>`
    }

})

 