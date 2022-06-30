import './Table.css'

function Table() {
  return (
    <table id="table">
    <tbody>
      <tr>
        <td>Мемы</td>
        <td className="tds"><a className='numberScores' href='#1'>100</a></td>
        <td className="tds"><a className='numberScores' href='#2'>200</a></td>
        <td className="tds"><a className='numberScores' href='#3'>300</a></td>
        <td className="tds"><a className='numberScores' href='#4'>400</a></td>
        <td className="tds"><a className='numberScores' href='#5'>500</a></td>
      </tr>
      <tr>
      <td>Гачи</td>
        <td className="tds"><a className='numberScores' href='#6'>100</a></td>
        <td className="tds"><a className='numberScores' href='#7'>200</a></td>
        <td className="tds"><a className='numberScores' href='#8'>300</a></td>
        <td className="tds"><a className='numberScores' href='#9'>400</a></td>
        <td className="tds"><a className='numberScores' href='#10'>500</a></td>
      </tr>
      <tr>
      <td>Фильмы</td>
        <td className="tds"><a className='numberScores' href='#11'>100</a></td>
        <td className="tds"><a className='numberScores' href='#12'>200</a></td>
        <td className="tds"><a className='numberScores' href='#13'>300</a></td>
        <td className="tds"><a className='numberScores' href='#14'>400</a></td>
        <td className="tds"><a className='numberScores' href='#15'>500</a></td>
      </tr>
    </tbody>
  </table>
  )
}

export default Table
