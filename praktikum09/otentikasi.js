<script lang="JavaScript">
    function Login(){
        var username=document.login.username.value;
        username=username.toLowerCase();
        var password=document.login.password.value;
        password=password.toLowerCase();
            if(username=="diki21211si" && password=="12345"){
                alert ("Selamat anda berhasil login");
            }
            else{
                alert ("Username dan Password anda salah!");
            }
    }
</script>