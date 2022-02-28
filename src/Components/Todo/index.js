




const TodoList = (props) => {

    return (

        <div className='getlists'>
            <table className="table_class" >
                <tbody>
                    <tr className="parent_row">
                      <div>
                      <td style={{ width: '10%' }}>
                            <input type="checkbox" value={props.isChecked} onChange={(e) => {
                                props.checkBoxPress(props.id, e.target.checked)
                            }}
                            />
                        </td>

                        <td style={{ textDecorationLine: props.isChecked === true ? 'line-through' : null, textDecorationStyle: 'solid' }} >{props.text} </td>
                      </div>

                        <div className='buttons'
                          
                        >
                            <td className='deletebutton' style={{

                            }}> <button onClick={() => {
                                props.onSelect(props.id)
                            }} > Delete </button>
                            </td>
                            <td className='deletebutton' style={{

                            }}><button onClick={() => {
                                props.onEdit(props.id)
                            }}>Edit</button>
                            </td>
                        </div>
                    </tr>
                </tbody>
            </table>

        </div>
        // </DragDropContext>
    )
}

export default TodoList;

let arr = [1, 2, 1, 1, 3, 3, 3, 4, 5, 5, 5, 6, 6, 6, 9, 9, 9, 8, 8, 7]

let uniqArr = [...new Set(arr)];
console.log(uniqArr, 'sorted')


const arr2 = [5, 2, 3, 4, 6, 9];
//  const isEven = (x)=>{
//   return x % 2==0
//  }

//  let output = arr2.filter(isEven);
//  console.log('output arry',output)

const isMax = (arr2) => {
    let sum = [];
    //  for (let i = 0; i < arr2.length; i++) {
    //  if(arr2[i]>max){
    //      max = arr2[i]
    //  }
    return sum = arr2[0] + arr2[3]


}
console.log(isMax(arr2), 'arr2')

const nums = [2, 7, 11, 15]
let twoSum = (nums) => {
    let target = []
    return (target = nums[0] + nums[1])

}

console.log(twoSum(nums), 'nums')