export const modes = document.querySelector('.modes');
export const memorySection = document.querySelector('#memory-section');
export const memoryMsg = document.querySelector('#memory-msg');
export const memoryTrash = document.querySelector('#memory-trash');
const mainDisplay = document.querySelector('.zero');
const mcButton = document.querySelector('.mc');
const mrButton = document.querySelector('.mr');
export const mDrop = document.querySelector('.sm-show');
export let memoryArray = [];
let mobileHistory = document.querySelector('.mobile-history')
let mobileMemory = document.querySelector('.mobile-memory')
let mobileParent = document.querySelector('.mobile-parent')


export function mPlusFunc(array) {

   let myDigit = 0 ;
   if (memorySection.querySelector('ul')) {
    debugger
       let spanNumber = document.querySelector('ul li p span')
        myDigit = +array[array.length - 1]
        myDigit = +myDigit + +mainDisplay.innerHTML ;
        spanNumber.innerHTML = myDigit
        memoryArray[memoryArray.length - 1] = myDigit
    } else {
        memorySection.insertAdjacentHTML('afterbegin',
        `<ul class = "hover";>
    <li>
    <p>
    <span id="numb-${0}">${mainDisplay.innerHTML}</span>
    <div id = 'buttons-container' style = "visibility: hidden;">
                    <button id="mc-${0}"  style="outline: none; border: 1px solid rgba(70, 69, 69, 0.913); cursor: pointer;">MC</button>
                    <button id="m-plus-${0}"  style=" outline: none; border: 1px solid rgba(70, 69, 69, 0.913); cursor: pointer;" >M+</button>
                    <button id="m-minus-${0}" style=" outline: none; border: 1px solid rgba(70, 69, 69, 0.913); cursor: pointer;">M-</button>
                    </div>
                    </p>
            </li>
            </ul>`
            
    );
    const mainUl = document.querySelector('.hover')
    let buttonsContainer = document.getElementById('buttons-container')
    mainUl.addEventListener('mouseenter', () => {
        buttonsContainer.style.visibility = ' visible'
    })
    mainUl.addEventListener('mouseleave', () => {

        buttonsContainer.style.visibility = ' hidden'
    })
    const mcBtn = document.getElementById(`mc-${0}`);
    mcBtn.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.parentElement.remove()
        memoryArray.splice(0 , 1);
        console.log(memoryArray);
        classCheck()

    });

    const mPlusBtn = document.getElementById(`m-plus-${0}`);
    mPlusBtn.addEventListener('click', () => {
        let spanNumber = document.getElementById(`numb-${0}`)
        let currentNumber = +memoryArray[0];
        currentNumber += +mainDisplay.innerHTML
        spanNumber.innerHTML = currentNumber
        console.log(memoryArray[0]);
        memoryArray[0] = currentNumber;
        console.log(memoryArray);

    });
    const mMinusBtn = document.getElementById(`m-minus-${0}`);
    mMinusBtn.addEventListener('click', () => {
        let spanNumber = document.getElementById(`numb-${0}`)
        let currentNumber = +memoryArray[0];
        currentNumber -= +mainDisplay.innerHTML
        spanNumber.innerHTML = currentNumber
        console.log(memoryArray[0]);
        memoryArray[0] = currentNumber;
        console.log(memoryArray);

    });
    }
    memoryMsg.innerHTML = ''
    memoryTrash.style.display = 'block'

    classCheck()
}


export function mMinusFunc(array) {

    let myDigit = 0 ;
    if (memorySection.querySelector('ul')) {
        let spanNumber = document.querySelector('ul li p span')
        myDigit = +array[array.length - 1] 
        myDigit -= +mainDisplay.innerHTML
        spanNumber.innerHTML = myDigit
        memoryArray[memoryArray.length - 1] = myDigit
     } else {
         memorySection.insertAdjacentHTML('afterbegin',
         `<ul class = "hover";>
     <li>
     <p>
     <span id="numb-${0}">${-mainDisplay.innerHTML}</span>
     <div id = 'buttons-container' style = "visibility: hidden;">
                     <button id="mc-${0}"  style="outline: none; border: 1px solid rgba(70, 69, 69, 0.913); cursor: pointer;">MC</button>
                     <button id="m-plus-${0}"  style=" outline: none; border: 1px solid rgba(70, 69, 69, 0.913); cursor: pointer;" >M+</button>
                     <button id="m-minus-${0}" style=" outline: none; border: 1px solid rgba(70, 69, 69, 0.913); cursor: pointer;">M-</button>
                     </div>
                     </p>
             </li>
             </ul>`
             
     );
     const mainUl = document.querySelector('.hover')
     let buttonsContainer = document.getElementById('buttons-container')

     mainUl.addEventListener('mouseenter', () => {
         buttonsContainer.style.visibility = ' visible'
     })
     mainUl.addEventListener('mouseleave', () => {
 
         buttonsContainer.style.visibility = ' hidden'
     })
     const mcBtn = document.getElementById(`mc-${0}`);
     mcBtn.addEventListener('click', (e) => {
         e.target.parentElement.parentElement.parentElement.remove()
         memoryArray.splice(0 , 1);
         console.log(memoryArray);
         classCheck()
 
     });
 
     const mPlusBtn = document.getElementById(`m-plus-${0}`);
     mPlusBtn.addEventListener('click', () => {
         let spanNumber = document.getElementById(`numb-${0}`)
         let currentNumber = +memoryArray[0];
         currentNumber += +mainDisplay.innerHTML
         spanNumber.innerHTML = currentNumber
         console.log(memoryArray[0]);
         memoryArray[0] = currentNumber;
         console.log(memoryArray);
 
     });
     const mMinusBtn = document.getElementById(`m-minus-${0}`);
     mMinusBtn.addEventListener('click', () => {
         let spanNumber = document.getElementById(`numb-${0}`)
         let currentNumber = +memoryArray[0];
         currentNumber -= +mainDisplay.innerHTML
         spanNumber.innerHTML = currentNumber
         console.log(memoryArray[0]);
         memoryArray[0] = currentNumber;
         console.log(memoryArray);
 
     });
    }
     memoryMsg.innerHTML = ''
     memoryTrash.style.display = 'block'
     classCheck()
}

export function mrFunc() {
    let lastNumb = memoryArray[memoryArray.length - 1]
    mainDisplay.innerHTML = lastNumb
}

export function mcFunc() {
    memorySection.innerHTML = ''
    memoryArray = []
    classCheck()
}
export function msFunc(numbArray) {
    memorySection.innerHTML = ''

    numbArray.forEach((numb, index) => {
        memorySection.insertAdjacentHTML('afterbegin',
            `<ul class = "hover";>
        <li>
        <p>
        <span id="numb-${index}">${numb}</span>
        <div id = 'buttons-container' style = "visibility: hidden;">
                        <button id="mc-${index}"  style="outline: none; border: 1px solid rgba(70, 69, 69, 0.913); cursor: pointer;">MC</button>
                        <button id="m-plus-${index}"  style=" outline: none; border: 1px solid rgba(70, 69, 69, 0.913); cursor: pointer;" >M+</button>
                        <button id="m-minus-${index}" style=" outline: none; border: 1px solid rgba(70, 69, 69, 0.913); cursor: pointer;">M-</button>
                        </div>
                        </p>
                </li>
                </ul>`
        );

        const mainUl = document.querySelector('.hover')
        mainUl.addEventListener('dblclick',()=>{
            let lastNumb = numb
            mainDisplay.innerHTML = lastNumb
         })
        let buttonsContainer = document.getElementById('buttons-container')
        mainUl.addEventListener('mouseenter', () => {
            buttonsContainer.style.visibility = ' visible'
        })
        mainUl.addEventListener('mouseleave', () => {

            buttonsContainer.style.visibility = ' hidden'
        })
        const mcBtn = document.getElementById(`mc-${index}`);
        mcBtn.addEventListener('click', (e) => {
            e.target.parentElement.parentElement.parentElement.remove()
            const numIndex = memoryArray.indexOf(numb);
            memoryArray.splice(numIndex, 1);
            console.log(memoryArray);
            classCheck()

        });

        const mPlusBtn = document.getElementById(`m-plus-${index}`);
        mPlusBtn.addEventListener('click', () => {
            let spanNumber = document.getElementById(`numb-${index}`)
            let currentNumber = +memoryArray[index];
            currentNumber += +mainDisplay.innerHTML
            spanNumber.innerHTML = currentNumber
            console.log(memoryArray[index]);
            memoryArray[index] = currentNumber;
            console.log(memoryArray);

        });
        const mMinusBtn = document.getElementById(`m-minus-${index}`);
        mMinusBtn.addEventListener('click', () => {
            let spanNumber = document.getElementById(`numb-${index}`)
            let currentNumber = +memoryArray[index];
            currentNumber -= +mainDisplay.innerHTML
            spanNumber.innerHTML = currentNumber
            console.log(memoryArray[index]);
            memoryArray[index] = currentNumber;
            console.log(memoryArray);

        });
    });
    classCheck()
    memoryTrash.style.display = ' block'
}




function classCheck() {
    if (memorySection.querySelector('ul')) {
        mcButton.classList.replace('de-active', 'active')
        mrButton.classList.replace('de-active', 'active')
        mDrop.classList.replace('de-active','active')
        memoryMsg.innerHTML = ''
        memoryTrash.style.display = 'block'
    } else {
        mcButton.classList.replace('active', 'de-active')
        mrButton.classList.replace('active', 'de-active')
        mDrop.classList.replace('active','de-active')
        memoryMsg.innerHTML = `There's no memory yet`
        memoryTrash.style.display = 'none'

    }
}




modes.addEventListener('click', (e) => {
    switch (e.target.classList[0]) {
        case 'mc':
            if (e.target.classList[1] === 'de-active') return;
            mcFunc();
            break;
        case 'mr':
            if (e.target.classList[1] === 'de-active') return;
            mrFunc();
            break;
        case 'm-plus':
            if(!memorySection.querySelector('ul')){
                memoryArray.push(mainDisplay.innerHTML);
                mPlusFunc(memoryArray);
            }else{
                mPlusFunc(memoryArray);
            }
            break;
        case 'm-minus':
            if(!memorySection.querySelector('ul')){
                memoryArray.push(-mainDisplay.innerHTML);
                mMinusFunc(memoryArray);
            }else{
                mMinusFunc(memoryArray);
            }
            break;
        case 'ms':
            memoryArray.push(mainDisplay.innerHTML);
            msFunc(memoryArray);
            break;
        case 'm':
            mDropFunc();
            break;
    }
});

function checkScreenWidth() {
    let browserWidth = window.innerWidth;
    if (browserWidth > 500) {
        mobileParent.style.display = 'none';
    } else {
        mobileParent.style.display = 'block';
    }
}

function mDropFunc() {
    if(memorySection.querySelector('ul')){
        mobileMemory.innerHTML = memorySection.innerHTML;
    }else{
        mobileMemory.style.display = 'none';
    }
    checkScreenWidth(); // اضافه کردن تابع بررسی عرض صفحه
    console.log(window.innerWidth);
}

window.addEventListener('resize', checkScreenWidth); 
memoryTrash.addEventListener('click', () => {
    mcFunc()
    classCheck()
})
