function Contact() {
  return (
    <section id="contact" className="mx-4">
      <p className="mb-6 text-3xl font-bold">Contact</p>
      <p className="my-4 text-lg font-semibold">
        Whether it's through code, brand identity development, or curriculum
        building, I'd love to help add to your company's story.{" "}
        <span className="gradientText">Let's build something together.</span>
      </p>
      <div className="container content-center mx-auto my-8">
        <form className="join w-full">
          <input
            id="messageContent"
            name="message"
            type="textarea"
            placeholder="Your Message"
            className="join-item textarea textarea-bordered textarea-md w-full"
          />
          <input
            value="Send"
            type="button"
            className="join-item max-w-lg btn btn-lg btn-outline btn-secondary"
            onClick={(event) => {
              handleMail(event);
            }}
          />
        </form>
      </div>
    </section>
  );
}
const messageContent = document.getElementById("messageContent");
function handleMail(event) {
  event.preventDefault;
  window.location.href = `mailto:jsnicholas@pm.me?body=${messageContent.value}`;
}

export default Contact;
