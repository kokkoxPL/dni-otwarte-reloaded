import ResultsTable from './ResultsTable'

const Results = () => {
  return (
    <div className='bg-black w-[80%] mx-auto my-[100px] px-[50px] py-[50px] rounded-3xl'>
      <ResultsTable overflow='scroll'/>
    </div>
  )
}

export default Results;