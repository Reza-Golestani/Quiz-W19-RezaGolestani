export default function InputForm() {
  return (
    <div className="flex flex-col gap-3">
        <h2>Input Form</h2>
        <form action="">
            <input type="text" placeholder="ToDo Title..."/>
            <button type="submit">Add</button>
        </form>
    </div>
  )
}
