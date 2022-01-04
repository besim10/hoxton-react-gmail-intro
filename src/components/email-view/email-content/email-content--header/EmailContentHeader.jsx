import EmailActionIcons from './EmailActionIcons'
import EmailInfo from './EmailInfo'
import './EmailContentHeader.css'

function EmailContentHeader(){
    return (
        <header className="email-content--header">
            <div className="avatar"></div>
            
            <EmailInfo />

            <div className="date-info">
              <p>17 March 2021, 09:33</p>
            </div>
            
            <EmailActionIcons />

        </header>
    )
}
export default EmailContentHeader