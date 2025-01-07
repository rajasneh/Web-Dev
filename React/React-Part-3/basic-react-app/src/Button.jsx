function handleClick(event) {
  console.log("Hello!");
  console.log(event);
}
function handleMouseOver() {
  console.log("Bye!");
}
function handleDobuleClick(){
    console.log("You dobule clicked");
}
export default function Button() {
  return (
    <div>
      <button onClick={handleClick}> Click me!</button>
      <p onMouseOver={handleMouseOver}>
        <b>his function is for Event Demo</b>Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quasi eius alias quos consequuntur,
        repellat quae vel officia repudiandae? Ullam voluptatem, cumque aliquam
        repellat quos quibusdam itaque vero iure officiis vel!
      </p>
      <button onDoubleClick={handleDobuleClick}>Dobule click me!</button>
    </div>
  );
}
