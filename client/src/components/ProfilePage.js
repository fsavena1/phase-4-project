import { Container, Row, Col } from "react-bootstrap"



function ProfilePage({ user, loading }) {

    console.log(user)


    return (
        <div style={{
            margin: '100px auto 0 auto',
        }}>
            <div class="container d-flex justify-content-center align-items-center">
                <div class="card">
                    <div class="upper">
                        <img src="https://i.imgur.com/Qtrsrk5.jpg" class="img-fluid" alt='ok'/>
                    </div>
                    <div class="user text-center">
                        <div class="profile">
                            <img src="https://i.imgur.com/JgYD2nQ.jpg" class="rounded-circle" width="80" alt='ok'/>
                        </div>
                    </div>
                    <div class="mt-5 text-center">
                        <h4 class="mb-0">{user.first_name} {user.last_name}</h4>
                        <span class="text-muted d-block mb-2">{user.user_name}</span>
                        <div class="d-flex justify-content-between align-items-center mt-4 px-4">
                            <div class="stats">
                                <h6 class="mb-0">NFTs Owned</h6>
                                <span>8,797</span>
                            </div>
                            <div class="stats">
                                
                            </div>
                            <div class="stats">
                                <h6 class="mb-0">Reviews</h6>
                                <span>{129}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 class='text-center'>My NFTS</h1>
            </div>
            <div>
                
            </div>
        </div>
    );
}

export default ProfilePage