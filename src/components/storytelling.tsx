function Storytelling() {
  return (
    <section id="storytelling" className="my-12">
      <p id="storytelling" className="my-6 mx-4 text-3xl font-bold">
        Storytelling
      </p>
      <div className="my-2 mx-4">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/0tlnK8oV80w"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className="my-2 mx-4">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/VJpVJ8mlOIM"
          allow="autoplay; encrypted-media"
          title="video"
        />
      </div>
    </section>
  );
}

export default Storytelling;
