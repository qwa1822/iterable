// 주석 Comments
// 한줄 짜리 주석을 작성할 때 씀
// TODO(수민):해야할 일을 작성
// TODO(기능): 기능 구현하기


/**
 * 주석은 코드 자체를 설명하는 것이 아니라,
 * 왜(WHY)와 어떻게(How)를 설명하는것이 좋음
 * (단,정말 필요한 경우에만)
*/

// 외부에서 많이쓰이는 함수인API인 JSDoc을 사용하면 좋음
// 함수위에서 /**

/**
 * 
 * @param {*} a  숫자 1
 * @param {*} b  숫자 2
 * @returns     a와 b를 더한값
 */
function add(a,b){
    return a+b;
}

