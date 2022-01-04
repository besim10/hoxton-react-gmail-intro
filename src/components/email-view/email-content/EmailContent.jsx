import EmailContentHeader from './email-content--header/EmailContentHeader'
import EmailActions from './EmailActions'
import EmailBody from './EmailBody'
import './EmailContent.css'

function EmailContent(){
    return (
        <article className="email-content">
          <div className="title">
            <h1>Welcome to Flaticon</h1>
          </div>

          <EmailContentHeader />

          <EmailBody />

          <EmailActions />

        </article>
    )
}
export default EmailContent