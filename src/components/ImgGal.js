import React, { Component } from 'react';
import '../css/ImgGal.css'

class ImgGal extends Component {
  constructor(props) {
    super(props);
this.state = {
      selectedOption: 'op1'
    };
  //  this.hover = this.hover.bind(this);
  this.onChange = this.onChange.bind(this);

  }
  onChange(e) {
      this.setState({selectedOption:e.target.value});

  }

  render(){
    return (
      <div className="ia-container center-block">
        <figure>
          <img src="images/1.jpeg" alt="image01" />
          <input type="radio" name="radio-set" checked={this.state.selectedOption === 'op1'} value="op1"
          onChange={this.onChange}/>
          <figcaption><span>True Colors</span></figcaption>

        <figure>
          <img src="images/2.jpeg" alt="image02" />
          <input type="radio" name="radio-set" checked={this.state.selectedOption === 'op2'} value="op2"
          onChange={this.onChange}/>
          <figcaption><span>Honest Light</span></figcaption>

          <figure>
            <img src="images/3.jpeg" alt="image03" />
            <input type="radio" name="radio-set" checked={this.state.selectedOption === 'op3'} value="op3"
            onChange={this.onChange}  />
            <figcaption><span>True Colors</span></figcaption>

          <figure>
            <img src="images/4.jpeg" alt="image04" />
            <input type="radio" name="radio-set" checked={this.state.selectedOption === 'op4'} value="op4"
            onChange={this.onChange}/>
            <figcaption><span>Honest Light</span></figcaption>

            <figure>
              <img src="images/5.jpeg" alt="image05" />
              <input type="radio" name="radio-set" checked={this.state.selectedOption === 'op5'}  value="op5"
              onChange={this.onChange}/>
              <figcaption><span>True Colors</span></figcaption>

            <figure>
              <img src="images/6.jpeg" alt="image06" />
              <input type="radio" name="radio-set" checked={this.state.selectedOption === 'op6'} value="op6"
              onChange={this.onChange} />
              <figcaption><span>Honest Light</span></figcaption>

              <figure>
                <img src="images/7.jpeg" alt="image07" />
                <input type="radio" name="radio-set"  checked={this.state.selectedOption === 'op7'} value="op7"
                onChange={this.onChange}/>
                <figcaption><span>True Colors</span></figcaption>

              <figure>
                <img src="images/8.jpeg" alt="image08" />
                <input type="radio" name="radio-set" checked={this.state.selectedOption === 'op8'} value="op8"
                onChange={this.onChange} />
                <figcaption><span>Honest Light</span></figcaption>
                <figure>
                  <img src="images/eRoshi.jpg" alt="image09" />
                  <input type="radio" name="radio-set" checked={this.state.selectedOption === 'op9'} value="op9"
                  onChange={this.onChange} />
                  <figcaption><span>Honest Light</span></figcaption>
                  </figure>
              </figure>

        </figure>

      </figure>

    </figure>

    </figure>

    </figure>

    </figure>

    </figure>
      </div>
    );
  }
}

export default ImgGal;
