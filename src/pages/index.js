import React from 'react';

export default function HomePage() {
  return (
    <main>
      <h1>Pat Williams!</h1>
      <Para />
      <h1 id="shows">Shows</h1>
      <Para />
      <h1 id="releases">Releases</h1>
      <Para />
      <form id="contact">
        <label>
          Contact me:
          <input type="text" placeholder="Can't use it, don't care" disabled />
        </label>
      </form>
    </main>
  );
}

const Para = () => {
  return (
    <p>
      Of your chamber no as said napping i my my straight. Fowl of least not the
      on wheeled, with will than by sad. Quoth sorrow it this living with.
      Nights be here ember is. Sent whether a wished fancy bird fancy. Rustling
      so door within core i remember ebony, for quaff but my god the felt i
      bird. The of enchanted this his from heaven till terrors quoth. Forget
      respiterespite still whom swung violet saintly. Sinking whose bust sainted
      more, not burden wrought or nameless he by or the whom. The on was
      plutonian the bird the. My door tufted.
    </p>
  );
};
