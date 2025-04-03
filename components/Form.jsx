import { useRef, useEffect } from 'react'
import RegularButton from './RegularButton'
import Select from './Select'

export default function Form({ handleSubmit, handleChange, isFirstRender }) {
    const divRef = useRef(null)
    
    useEffect(() => {
        !isFirstRender && divRef.current.focus()
    }, [])
    
    return (
        <div className="form-container" ref={divRef} tabIndex={-1}>
            <p className="p--regular">
                Customize the game by selecting an emoji category and a number of memory cards. You can navigate the whole game using only the tab and shift keys.
            </p>
            <form className="wrapper">
                <Select handleChange={handleChange} />
                <RegularButton handleClick={handleSubmit}>
                    Start Game
                </RegularButton>
            </form>
        </div>
    )
}