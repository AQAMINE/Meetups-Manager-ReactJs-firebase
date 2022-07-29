import { useRef } from 'react';
import Classes from './NewMeetupForm.module.css'; 
import Card from '../ui/Card';
function NewMeetupForm (props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler (event) {
        event.preventDefault();
        const entredTitle       = titleInputRef.current.value;
        const entredImage       = imageInputRef.current.value;
        const entredAddress     = addressInputRef.current.value;
        const entredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: entredTitle,
            image: entredImage,
            address: entredAddress,
            description: entredDescription
        }
        
        props.onAddMeetup(meetupData);
    }

    return (
        <Card>
            <form className={Classes.form} onSubmit={submitHandler}>
                <div className={Classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type="text" required id="title" ref={titleInputRef}/>
                </div>
                <div className={Classes.control}>
                    <label htmlFor='image'>Meetup Image (Url)</label>
                    <input type="url" required id="image" ref={imageInputRef}/>
                </div>
                <div className={Classes.control}>
                    <label htmlFor='address'>Meetup Address</label>
                    <input type="text" required id="address" ref={addressInputRef}/>
                </div>
                <div className={Classes.control}>
                    <label htmlFor='description'>Meetup Description</label>
                    <textarea id='description' required rows="5" ref={descriptionInputRef}></textarea>
                </div>
                <div className={Classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;