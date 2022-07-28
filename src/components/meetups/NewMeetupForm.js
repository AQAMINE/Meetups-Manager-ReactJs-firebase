import Classes from './NewMeetupForm.module.css'; 
import Card from '../ui/Card';
function NewMeetupForm () {
    return (
        <Card>
            <form className={Classes.form}>
                <div className={Classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type="text" required id="title"/>
                </div>
                <div className={Classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type="url" required id="image"/>
                </div>
                <div className={Classes.control}>
                    <label htmlFor='address'>Meetup Address</label>
                    <input type="text" required id="address"/>
                </div>
                <div className={Classes.control}>
                    <label htmlFor='description'>Meetup Description</label>
                    <textarea id='description' required rows="5"></textarea>
                </div>
                <div className={Classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;