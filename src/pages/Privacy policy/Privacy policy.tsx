import "./privacy.css";
import line from "../../assets/imgs/line.png";

function PrivacyPolicy() {
  return (
    <main className="container my-5 text-center privacy-container">
      <h2 className="privacy-title card-title">سياسة الخصوصية</h2>
      <img className="Line" src={line} alt="privacy" />
      <div className="privacy-container container privacy-body">
        <div className="card privacy-card mb-4">
          <div className="card-body privacy-card-body">
            <h2 className="card-title-privacy">مقدمة</h2>
            <p className="card-text">
              نحن نلتزم بحماية خصوصيتك. تشرح هذه السياسة كيف نجمع، نستخدم،
              ونشارك معلوماتك الشخصية.
            </p>
          </div>
        </div>
        <div className="card privacy-card mb-4">
          <div className="card-body privacy-card-body">
            <h2 className="card-title-privacy">جمع المعلومات</h2>
            <p className="card-text">
              نقوم بجمع معلومات مختلفة عند استخدامك لموقعنا، بما في ذلك
              المعلومات التي تقدمها عند التسجيل والمعلومات التي نجمعها تلقائيًا.
            </p>
          </div>
        </div>
        <div className="card privacy-card mb-4">
          <div className="card-body privacy-card-body">
            <h2 className="card-title-privacy">استخدام المعلومات</h2>
            <p className="card-text">
              نستخدم معلوماتك لتقديم وتحسين خدماتنا، للتواصل معك، وللأغراض
              القانونية والتسويقية.
            </p>
          </div>
        </div>
        <div className="card privacy-card mb-4">
          <div className="card-body privacy-card-body">
            <h2 className="card-title-privacy">مشاركة المعلومات</h2>
            <p className="card-text">
              قد نشارك معلوماتك مع أطراف ثالثة في الحالات التالية: لتقديم
              خدماتنا، للامتثال للقانون، لحماية حقوقنا، أو بموافقتك.
            </p>
          </div>
        </div>
        <div className="card privacy-card mb-4">
          <div className="card-body privacy-card-body">
            <h2 className="card-title-privacy">أمان المعلومات</h2>
            <p className="card-text">
              نحن نتخذ التدابير الأمنية اللازمة لحماية معلوماتك من الوصول غير
              المصرح به أو الكشف أو التدمير.
            </p>
          </div>
        </div>
        <div className="card privacy-card mb-4">
          <div className="card-body privacy-card-body">
            <h2 className="card-title-privacy">حقوقك</h2>
            <p className="card-text">
              لديك الحق في الوصول إلى معلوماتك الشخصية وتصحيحها أو طلب حذفها أو
              تقييد معالجتها.
            </p>
          </div>
        </div>
        <div className="card privacy-card mb-4">
          <div className="card-body privacy-card-body">
            <h2 className="card-title-privacy">تغييرات على هذه السياسة</h2>
            <p className="card-text">
              قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سنقوم بإشعارك بأي
              تغييرات جوهرية عن طريق نشر السياسة الجديدة على موقعنا.
            </p>
          </div>
        </div>
        <div className="card privacy-card mb-4">
          <div className="card-body privacy-card-body">
            <h2 className="card-title-privacy">الاتصال بنا</h2>
            <p className="card-text">
              إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على
              [البريد الإلكتروني].
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PrivacyPolicy;
