let role = "student";

switch (role) {
    case 'admin':
        console.log('Welcome Admin');
        window.location.href = '/admin-dashboard';
        break;

    case 'staff':
        console.log('Welcome Staff');
        window.location.href = '/staff-dashboard';
        break;

    case 'student':
        console.log('Welcome Student');
        window.location.href = '/student-portal';
        break;

    case 'user':
        console.log('Welcome User');
        window.location.href = '/user-home';
        break;

    case 'guest':
        console.log('Welcome Guest');
        window.location.href = '/login';
        break;

    default:
        console.log('Role not recognized');
        window.location.href = '/404';
}
