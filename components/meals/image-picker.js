'use client'

import { useRef, useState } from 'react'
import classes from './image-picker.module.css'
import Image from 'next/image'

export default function ImagePicker({label, name}) {
    const [pickedImage, setPickedImage] = useState()
    const imageInputRef = useRef()

    function handleButtonClick() {
        imageInputRef.current.click()
    }

    function handleOnChange(e) {
        const file = e.target.files[0]

        if(!file) {
            setPickedImage(null)
            return
        }

        const fileReader = new FileReader()

        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }

        fileReader.readAsDataURL(file)
    } 

    return (
        <div className={classes.picker}> 
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image picked yet</p>}
                    {pickedImage && 
                        <Image 
                            src={pickedImage} 
                            alt='picked image'
                            fill
                        />
                    }
                </div>
                <input 
                    className={classes.input}
                    type='file'
                    id={name}
                    accept='image/png, image/jpeg'
                    name={name}
                    ref={imageInputRef}
                    onChange={handleOnChange}
                    required
                />    
                <button 
                    className={classes.button} 
                    type='button'
                    onClick={handleButtonClick}
                >
                    Pick an Image
                </button>
            </div>
        </div>
    )
}