import React from "react";


const Profile = () => {
    return(
        <main className="content">
            <div className="main-img">
                <img src="https://images.unsplash.com/photo-1513735539099-cf6e5d559d82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="main"/>
            </div>
            Main content
            <div className="main-avatar">
                <img src="https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg" alt="avatar"/>
            </div>
            <div>My posts</div>
            <div>New post(input)</div>
            <div>post 1</div>
            <div>post 2</div>
        </main>
    )
}

export default Profile;