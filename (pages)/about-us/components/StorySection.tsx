const StorySection = () => {
  return (
    <section className="lg:w-lg  my-12 lg:my-0 lg:border-neutral-100 lg:rounded-2xl bg-primary-yellow-dark-shade/80 lg:p-12 p-4 lg:absolute -bottom-36 lg:z-50 lg:border-2">
      <h3
        className={`text-xl lg:text-3xl lg:text-center text-primary-yellow font-bold [text-shadow:_2px_1px_0_rgb(0_0_0_/_40%)]`}
      >
        Story of Our Juice Shop
      </h3>
      <p className="lg:text-2xl text-white lg:text-center font-semibold">
        Fresh Choices, Healthier Live - That&apos;s Health Station.
      </p>
      <div className="flex justify-evenly w-full gap-4 py-4 flex-col lg:flex-row">
        <h4 className="text-xl font-semibold text-white">Mission</h4>
        <article className="max-w-lg text-white text-sm lg:text-base">
          To deliver the finest fruit-based delights, revolutionizing fruit
          consumption with diverse, delicious options that promote health,
          delight the senses, and sustain the planet.
        </article>
      </div>
    </section>
  );
};

export default StorySection;
