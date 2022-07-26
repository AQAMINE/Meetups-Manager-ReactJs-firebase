import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";


function AllMeetupsPage () {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetup, setLoadedMeetup] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://react-js--meetups-manager-default-rtdb.firebaseio.com/meetups.json')
        .then( response => {
            return response.json();
        })
        .then(data => {

            const meetups = [];
            for(const key in data){
                const meetup = {
                    id: key,
                    ...data[key]
                }
                meetups.push(meetup);
            }

            setIsLoading(false);
            setLoadedMeetup(meetups);
        });

    }, []);


    if(isLoading){
        return (
            <section>
                <p>Is Loading...</p>
            </section>
        );
    }

    return (
        <section>
            <h1>All Meetups</h1>
            <ul>
                <MeetupList meetups={loadedMeetup}/>
            </ul>
        </section>
    );
}
export default AllMeetupsPage;