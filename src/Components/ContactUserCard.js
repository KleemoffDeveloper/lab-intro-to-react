const contactInfo = 
{
    name: 'Jordan Walke',
    title: 'React Creator',
    body: 'Lorem Ipsum'
}

function ContactUserCard () {
    return <div className={'contact-card'}>
      <img src={'https://raw.githubusercontent.com/KleemoffDeveloper/lab-intro-to-react/main/public/profile.png'} 
      className="contact-image"></img>
      <ul className="contact-info-list">
        <li><h2 className="contact-name">{contactInfo.name}</h2></li>
        <li><h3 className="contact-sub">{contactInfo.title}</h3></li>
        <li><p className="contact-body">{contactInfo.body}</p></li>
      </ul>
    </div>
  }

  export {ContactUserCard};