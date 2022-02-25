import React from 'react'

export default function Content() {
    return (
        <div className="content flex-row">
            <div className="mainContent">
                <h1>Pääuutinen</h1>
                <img src="bomba.jpg" id="mainImage"/>
                <h2>
                    Magna sit amet purus gravida quis blandit turpis cursus. Ipsum dolor sit amet consectetur adipiscing.
                </h2>
                <div className="mainText">
                    Id diam maecenas ultricies mi eget mauris. Tempor orci dapibus ultrices in iaculis nunc. 
                    Eget mi proin sed libero enim sed faucibus turpis in. Vel elit scelerisque mauris pellentesque pulvinar pellentesque. 
                    Urna condimentum mattis pellentesque id nibh tortor id. Nullam non nisi est sit amet facilisis magna etiam. 
                    Facilisi nullam vehicula ipsum a arcu cursus vitae. Suspendisse potenti nullam ac tortor vitae purus. 
                    Vestibulum lorem sed risus ultricies. Massa sapien faucibus et molestie ac feugiat sed lectus. 
                    Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. Quis hendrerit dolor magna eget est lorem. 
                    Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Nulla pharetra diam sit amet nisl suscipit. 
                    Ornare arcu odio ut sem nulla pharetra. Eu lobortis elementum nibh tellus molestie. Morbi tristique senectus et netus.
                    Urna condimentum mattis pellentesque id nibh tortor id. Nullam non nisi est sit amet facilisis magna etiam. 
                    Facilisi nullam vehicula ipsum a arcu cursus vitae. Suspendisse potenti nullam ac tortor vitae purus. 
                    Vestibulum lorem sed risus ultricies. Massa sapien faucibus et molestie ac feugiat sed lectus. 
                    Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. Quis hendrerit dolor magna eget est lorem. 
                </div>

            </div>
            <div className="sideBar">
                <h1>Luetuimmat</h1>
                <div className="mostRead flex-column">
                    <div className="mostReadItem flex-row">
                        <div className="placementNumber">1</div>
                        <div className="mostReadHeadline">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </div>
                    </div>
                    <div className="mostReadItem flex-row">
                        <div className="placementNumber">2</div>
                        <div className="mostReadHeadline">
                            Quis vel eros donec ac odio tempor orci dapibus. Ullamcorper morbi tincidunt ornare massa eget egestas. 
                        </div>
                    </div>
                    <div className="mostReadItem flex-row">
                        <div className="placementNumber">3</div>
                        <div className="mostReadHeadline">
                            Eget nulla facilisi etiam dignissim. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero.
                        </div>
                    </div>
                    <div className="mostReadItem flex-row">
                        <div className="placementNumber">4</div>
                        <div className="mostReadHeadline">
                            At varius vel pharetra vel. Ante in nibh mauris cursus. Aliquam etiam erat velit scelerisque in dictum non.
                        </div>
                    </div>
                    <div className="mostReadItem flex-row">
                        <div className="placementNumber">5</div>
                        <div className="mostReadHeadline">
                            Hendrerit gravida rutrum quisque non. Quam id leo in vitae turpis massa sed elementum. Tempus quam pellentesque nec nam aliquam sem et tortor.
                        </div>
                    </div>
                    <div className="mostReadItem flex-row">
                        <div className="placementNumber">6</div>
                        <div className="mostReadHeadline">
                            Fringilla est ullamcorper eget nulla facilisi etiam dignissim. At auctor urna nunc id cursus. Odio facilisis mauris sit amet massa.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}