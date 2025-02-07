const BMIform = document.querySelector('.BMIform');
const age = document.querySelector('#age');
const height = document.querySelector('#height');
const weight = document.querySelector("#weight");
const BMIbutton = document.querySelector('.BMIbutton');
const results = document.querySelector('.results');
const yourBMI = document.querySelector('.yourBMI');

BMIbutton.addEventListener("click", () => {
    const ageValue = parseInt(age.value); 
    const heightValue = parseFloat(height.value); 
    const weightValue = parseFloat(weight.value); 
    if (heightValue > 0 && weightValue > 0) {
        const BMIvalue = weightValue / (heightValue * heightValue);

        let status = '';
        if (BMIvalue < 18.5) {
            status = 'Underweight';
            yourBMI.innerHTML = `
            <div class="underweightClass">
                        <p class="yourBMIcategory">underweight</p>
                        <p class="yourBMIpara">Your BMI is below 18.5, which indicates that you are underweight. It is important to maintain a balanced diet and consult a healthcare professional to ensure you're getting the nutrients your body needs.</p>
                    </div>
            `
        } else if (BMIvalue >= 18.5 && BMIvalue < 24.9) {
            status = 'Normal weight';
            yourBMI.innerHTML = `
            <div class="healthyClass">
                        <p class="yourBMIcategory">healthy weight</p>
                        <p class="yourBMIpara">Your BMI falls within the healthy range (18.5 - 24.9). This is considered optimal for your health. Keep up the good work and continue maintaining a balanced lifestyle.</p>
                    </div>
            `
        } else if (BMIvalue >= 25 && BMIvalue < 29.9) {
            status = 'Overweight';
            yourBMI.innerHTML = `
            <div class="overweightClass">
                        <p class="yourBMIcategory">overweight</p>
                        <p class="yourBMIpara">Your BMI is between 25 and 29.9, indicating that you are overweight. It may be helpful to adopt a healthy diet and regular physical activity to maintain a healthier weight.</p>
                    </div>
            `
        } else {
            status = 'Obesity';
            yourBMI.innerHTML = `
            <div class="obeseClass">
                        <p class="yourBMIcategory">obese</p>
                        <p class="yourBMIpara">Your BMI is 30 or above, placing you in the obesity category. It's important to focus on a healthy eating plan and regular exercise to reduce health risks. Consider speaking with a healthcare provider for guidance.</p>
                    </div>
            `
        }

        results.innerHTML = `
            <p class="BMIanswer">BMI: <span>${BMIvalue.toFixed(2)}</span></p>
            <p class="BMIstatus">Status: <span>${status}</span></p>
        `;

    } else {
        results.innerHTML = `<p style="color:red">Please enter valid height and weight values.</p>`;
    }
});


//Swiper JS
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3, /* Default for larger screens */
    spaceBetween: 20, /* Space between slides */
    
    pagination: {
        el: '.swiper-pagination',
    },
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1, 
            spaceBetween: 10,
        },
        750: {
            slidesPerView: 2, 
            spaceBetween: 15,
        },
        1115: {
            slidesPerView: 3, 
            spaceBetween: 20,
        },
    },
});
