//best bmi code
const form=document.querySelector('form')
form.addEventListener('submit',function(event){
    event.preventDefault();
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')

    if(height===""|| height<0 || isNaN(height)){
      results.innerHTML= `Please enter valid value ${height}`
    }
    else if(weight===""|| weight<0 || isNaN(weight)){
      results.innerHTML= `Please enter valid value ${weight}`
    }
    else{
      const bmi= (weight/((height*height)/10000)).toFixed(2);
      const nicewt=(((24.9*(height*height))/10000)).toFixed(2)
      const nicewt2=(((18.6*(height*height))/10000)+1).toFixed(2)
      if(bmi<18.6){
          results.innerHTML=`thoda khana kha bhai, ${bmi} itna kum bmi , ${nicewt2} to ${nicewt} is good range for you , so minimum inc in wt =${nicewt2-weight} kg and maximum- ${nicewt-weight}kg`

      }
      else if(bmi<24.9){
          results.innerHTML=`fit person with bmi ${bmi}`
      }
      else{
        results.innerHTML=`Heavy weight champion with ${bmi} bmi, reduce till ${nicewt} weight means reduce ${weight-nicewt} kg`
      }

    }
})