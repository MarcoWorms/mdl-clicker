import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index'
import { Button, IconButton} from 'react-toolbox/lib/button'
import { ProgressBar } from 'react-toolbox/lib/progress_bar'
import style from './Entry.css'

export default class Entry extends Component {
  constructor() {
    super()
    this.state = {
      progress: [0],
      circularProgress: 0
    }
  }
  handleIncrement = () => {
    const progress = this.state.progress
    progress[0] += 50

    progress.forEach((val, i) => {
      if (val >= 100) {
        progress[i] -= 100
        if (!progress[i + 1]) {
          progress[i + 1] = 0
        }
        progress[i + 1] += 50/(i+2)
      }
    })

    this.setState({progress})
  }
  handleDrain = () => {
    const drained = this.state.progress.reduce((acc, val, i) => acc + (val * Math.pow(i, 2)))
  }
  render() {
    return (
      <Grid fluid>
        <Row >
          <Col xs={3} className={style.main}>
            <br />
            <Button onClick={this.handleIncrement} icon="add" floating primary/>
            { this.state.progress.map((val, pos) => 
                <div>
                  <ProgressBar mode='determinate' value={this.state.progress[pos]} key={pos}/>
                </div>
              )  
            }
            <br />
            <Button onClick={this.handleDrain} icon="compare_arrows" floating accent/>
            <br />
            <br />
            <ProgressBar type="circular" mode='determinate' value={this.state.circularProgress}
              theme={{
                'color': 'yellow !important'
              }} 
            />
          </Col>
        </Row>
      </Grid>
    )
  }
}

