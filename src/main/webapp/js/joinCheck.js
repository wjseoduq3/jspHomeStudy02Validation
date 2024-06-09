/**
 * 
 */

 function joinCheck() {
	var form = document.joinForm;
	if (form.memberId.value.length == 0) {
		alert("아이디는 필수입력사항입니다.\n다시 확인해주세요.");
		form.memberId.focus();
		return false;
	} 
	if (form.memberId.value.length < 4 || form.memberId.value.length > 15) {
		alert("아이디는 4자 이상이고 15자 이하이어야 합니다.\n다시 확인해주세요.");
		form.memberId.focus();
		return false;	
	}
	
	if (form.memberPw.value.length == 0) {
		alert("비밀번호는 필수입력사항입니다.\n다시 확인해주세요.");
		form.memberPw.focus();
		return false;
	}
	if (form.memberPw.value.length < 4) {
		alert("비밀번호는 4자 이상이어야 합니다.\n다시 확인해주세요.");
		form.memberPw.focus();
		return false;
	}
	
	if (form.memberName.value.length == 0) {
		alert("이름은 필수입력사항입니다.\n다시 확인해주세요.");
		return false;		
	}
	var hangul = /^[ㄱㅏ-힣]*$/;
	/* var eng = /^[a-z|A-Z]*$/; */
	if (!hangul.test(form.memberName.value)) {
		alert("이름은 한글만 입력가능합니다.\n다시 확인해주세요.");
		return false;		
	}
	
	if(form.phoneNumber.value.length == 0) {
		alert("전화번호는 필수입력사항입니다.\n다시 확인해주세요.");
		return false;
	}
	var pnumber= /^[0-9]*$/;
	if (!pnumber.test(form.phoneNumber.value)) {
		alert("전화번호는 숫자만 입력가능합니다.\n다시 확인해주세요.");
		return false;
	}
	
	return true;
	
 }