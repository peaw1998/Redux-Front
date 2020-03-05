import React from 'react';
import './BearCard.css';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

const BearCard = props => {
    const dispatch = useDispatch()
    const form = useSelector(state => state.form)

    const deleteBear = async () => {
        const result = await axios.delete(`http://localhost:8000/api/bears/${props.id}`)
        dispatch({ type: 'DELETE_BEARS', id: props.id })
    }
    const updateBear = async () => {
        const result = await axios.put(`http://localhost:8000/api/bears/${props.id}`, form)
        dispatch({ type: 'UPDATE_BEARS', id: props.id, bear: {...form, id: props.id} })
    }

    return (
        <div className='bearcard-container'>
            <div className='bearcard' style={{ backgroundImage: `url('${props.img}')` }}>
                <p className='bearcard-weight'>{props.weight}</p>
                <p className='bearcard-name'>{props.name}</p>
            </div>
            <div className='bearcard-actions'>
                <div onClick={updateBear}>Update</div>
                <div onClick={deleteBear}>Delete</div>
            </div>
        </div>

    )
}

export default BearCard;