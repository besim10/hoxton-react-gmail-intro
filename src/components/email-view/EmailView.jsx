import EmailToolbar from './email-toolbar/EmailToolbar'
import EmailContent from './email-content/EmailContent'

function EmailView(){
    return (
        <main className="email-view">
        <EmailToolbar />
        <EmailContent />
      </main>
    )
}
export default EmailView