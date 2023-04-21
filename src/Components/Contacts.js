import { ContactUserCard } from "./ContactUserCard";

function Contacts() {
    return <div className="section">
        <h2>Contacts</h2>
        <ul className="contact-list">
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />
        </ul>
    </div>
}

export default Contacts;