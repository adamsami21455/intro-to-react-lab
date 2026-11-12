import Button from "./components/Button"


function App() {
  const students = ['Fares', 'Hasan', 'Hussain', 'Amal', 'Aya', 'Hajar', 'Nawraa', 'Khadija', 'Zaid']
  return (
    <div>
      <Button></Button>
        {students.map((oneStudent) => (
        <div key={oneStudent}>
          <ul>
            <li>{oneStudent}</li>
          </ul>
        </div>
      ))}
</div>
  )
}

      export default App