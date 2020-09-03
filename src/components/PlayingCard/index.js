import React from 'react'
import './card.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function PlayingCard(props) {

    return(
        <div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <div id='card'>
                <div class="card-header">
                    <div class="crown" id='left_crown'>
                    <FontAwesomeIcon icon={props.icon} />
                    </div>
                    <div class="role">
                        <p>{props.title}</p>
                    </div>
                </div>
                <div class="card-content">
                    <FontAwesomeIcon icon={props.icon} />
                </div>
                <div class="card-footer">
                    <div class='crown' id='left_crown'>
                    <FontAwesomeIcon icon={props.icon} />
                    </div>
                </div>
            </div>
        </div>
    )
}