function Contact() {
  return (
    <section id="contact" className="mx-4">
      <p className="mb-6 text-3xl font-bold">Contact</p>
      <p className="my-4 text-lg font-semibold">
        Whether it's through code, brand identity development, or curriculum
        building, I'd love to help add to your company's story.{" "}
        <span className="gradientText">Let's build something together.</span>
      </p>
      <div className="mx-auto max-w-3xl">
        <div className="mx-auto form-control w-full max-w-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="my-4 input input-bordered w-full max-w-lg"
          />
          <input
            type="text"
            placeholder="Your Message"
            className="input input-bordered w-full max-w-lg my-2"
          />
          <a
            className="mx-auto my-4 max-w-lg btn btn-md btn-outline btn-secondary"
            onClick={() => {
              console.log("hello");
            }}
          >
            Send
          </a>
        </div>
      </div>
    </section>
  );
}
export default Contact;
