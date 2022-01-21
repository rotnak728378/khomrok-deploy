const Seniority = ({jobLevel, setJobLevel}) => {
    return (
        <>
            <select className="form-select" aria-label="Default select seniority" value={jobLevel} onChange={e => setJobLevel(e.target.value)}>
                <option value="">Default Level</option>
                <option value="entry">Entry-Level</option>
                <option value="experienced">Experienced Level</option>
                <option value="executive">Executive</option>
                <option value="senior-executive">Senior Executive</option>
                <option value="manager">Manager/Supervisor</option>
                <option value="senior-manager">Senior Manager/Supervisor</option>
            </select>
        </>
    )
}

export default Seniority
