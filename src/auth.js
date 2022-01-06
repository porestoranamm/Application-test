export function getAuthForm() {
 return `
    <form class="mui-form" id="auth-form">
    <div class="mui-textfield mui-textfield--float-label">
    <input type="email" id="email" required>
    <label for="email" disabled>Email</label>
    </div>
    button type="submit" class="mui-btn mui-btn--raised mui-btn--primary">Задать вопрос</button>
    </form>
 `
}