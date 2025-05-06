// 子組件: 表頭
function StudentTableHeader() {
    return (
        <thead>
            <tr>
                <th>ID</th><th>名稱</th><th>分數</th><th>Pass</th>
            </tr>
        </thead>
    )
}

// 子組件: 表身
function StudentTableBody({students}) {
    return (
        <tbody>
            {
                students.map((student) => {
                    const isPass = student.score >= 60;
                    return (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td align="right">{student.score}</td>
                            <td>{isPass ? "V" : "X"}</td>
                            
                        </tr>
                    );
                })
            }
        </tbody>
    )
}

// 子組件: 表尾
function StudentTableFooter({avgScore}) {
    return (
        <tfoot>
            <tr>
                <td colSpan="2" align="right">平均</td>
                <td align="right">{avgScore}</td>
                <td></td>
            </tr>
        </tfoot>
    )
}

// 子組件: 主表
function StudentTable({students, avgScore}) {
    return (
        <table border="1">
            <StudentTableHeader />
            <StudentTableBody students={students} />
            <StudentTableFooter avgScore={avgScore} />
        </table>
    )
}

// 父組件
function App() {
    const students = [
        { id: 1, name: '小明', score: 55 },
        { id: 2, name: '小美', score: 78 },
        { id: 3, name: '小華', score: 92 },
        { id: 4, name: '阿強', score: 40 },
        { id: 5, name: '阿田', score: 59 }
    ];

   //計算平均
    const avgScore = students.reduce((sum, student) => sum + student.score, 0) / students.length

    return(
        <>
            <h1>學生列表</h1>
            <StudentTable students={students} avgScore={avgScore}/> 
            {/* 要記得回傳值 */}
        </>
    )
}

export default App