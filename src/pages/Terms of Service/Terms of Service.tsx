import "./terms of Service.css";
import line from "../../assets/imgs/line.png";

function TermsOfService() {
  return (
    <main className="container my-5 text-center terms-container">
      <h2 className="terms-title card-title">شروط الاستخدام</h2>
      <img className="Line" src={line} alt="privacy" />
      <div className="terms-container container terms-body">
        <div className="card terms-card mb-4">
          <div className="card-body  terms-card-body">
            <h2 className="card-title-terms">مقدمة</h2>
            <p className="card-text">
              مرحبًا بكم في موقع عرض المتاجر. باستخدامك لموقعنا، فإنك توافق على
              الالتزام بشروط الخدمة التالية.
            </p>
          </div>
        </div>
        <div className="card terms-card mb-4">
          <div className="card-body terms-card-body">
            <h2 className="card-title-terms">استخدام الموقع</h2>
            <p className="card-text">
              يجب عليك استخدام الموقع لأغراض قانونية فقط وبطريقة لا تنتهك حقوق
              الآخرين أو تقيد استخدامهم للموقع.
            </p>
          </div>
        </div>
        <div className="card terms-card mb-4">
          <div className="card-body terms-card-body">
            <h2 className="card-title-terms">حساب المستخدم</h2>
            <p className="card-text">
              عند إنشاء حساب، يجب عليك تقديم معلومات دقيقة وكاملة. أنت مسؤول عن
              الحفاظ على سرية معلومات حسابك وكلمة المرور.
            </p>
          </div>
        </div>
        <div className="card terms-card mb-4">
          <div className="card-body terms-card-body">
            <h2 className="card-title-terms">الملكية الفكرية</h2>
            <p className="card-text">
              جميع المحتويات على الموقع محمية بموجب حقوق الطبع والنشر وحقوق
              الملكية الفكرية الأخرى.
            </p>
          </div>
        </div>
        <div className="card terms-card mb-4">
          <div className="card-body terms-card-body">
            <h2 className="card-title-terms">الروابط الخارجية</h2>
            <p className="card-text">
              قد يحتوي الموقع على روابط لمواقع خارجية. نحن لسنا مسؤولين عن محتوى
              أو ممارسات الخصوصية لهذه المواقع.
            </p>
          </div>
        </div>
        <div className="card terms-card mb-4">
          <div className="card-body terms-card-body">
            <h2 className="card-title-terms">التعديلات على الشروط</h2>
            <p className="card-text">
              نحتفظ بالحق في تعديل شروط الخدمة في أي وقت. سيتم نشر الشروط
              المعدلة على الموقع، ويعد استمرارك في استخدام الموقع بعد التعديلات
              موافقة منك على الشروط الجديدة.
            </p>
          </div>
        </div>
        <div className="card terms-card mb-4">
          <div className="card-body terms-card-body">
            <h2 className="card-title-terms">الاتصال بنا</h2>
            <p className="card-text">
              إذا كان لديك أي أسئلة حول شروط الخدمة، يرجى الاتصال بنا على
              [البريد الإلكتروني].
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default TermsOfService;
