import React from 'react';

import { IconLabelButton } from 'common/IconLabelButton';
import { ErrorBoundary } from 'modules/errors';

export class AuthVerificationCardOld extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      value: '',
      otp1: '',
      otp2: '',
      otp3: '',
      otp4: '',
      otp5: '',
      disable: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value1: any, event: any) {
    this.setState({ [value1]: event.target.value });
  }

  handleSubmit(event: any) {
    const data = new FormData(event.target);
    console.log(this.state);
    event.preventDefault();
  }

  inputfocus = (elmnt: any) => {
    if (elmnt.key === 'Delete' || elmnt.key === 'Backspace') {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      console.log('next');

      const next = elmnt.target.tabIndex;
      if (next < 6) {
        elmnt.target.form.elements[next].focus();
      }
    }
  };

  render() {
    return (
      <ErrorBoundary>
        <div className="w-[450px] h-full p-9 place-items-center bg-fullwhite shadow-[1px_1px_4px_rgba(0,0,0,0.25)] rounded-lg grid grid-flow-row m-auto gap-6 place-content-center auto-cols-auto">
          <div>
            <h2 className="text-lg font-semibold text-textColorOrange">
              Tassyklayys kody girizin.
            </h2>
            <hr className="w-auto mt-2 h-auto border-[0.1px] border-solid bg-textColorOrange border-textColorOrange" />
          </div>
          <div className="text-justify">
            <p className="text-base">
              Let’s make sure it’s really you. We’ve just sent a text message
              with a fresh verification code to your email ending in
              ***********va@gmail.com
            </p>
          </div>
          <form
            onSubmit={this.handleSubmit}
            className="inline-grid grid-flow-col gap-2 auto-cols-max"
          >
            <input
              name="otp1"
              type="text"
              autoComplete="off"
              className="w-[50px] h-[50px] bg-fullwhite focus:outline-none focus:ring-0 focus:ring-offset-0 border-[#E6E6E6] text-center focus:ring-offset-transparent focus:ring-transparent focus:border-textColorOrange border border-solid rounded-lg shadow-[0px_0px_4px_rgba(0,0,0,0.25)]"
              // value={this.state.otp1}
              // onKeyPress={this.keyPressed}
              onChange={(e) => this.handleChange('otp1', e)}
              tabIndex={1}
              maxLength={1}
              onKeyUp={(e) => this.inputfocus(e)}
            />
            <input
              name="otp2"
              type="text"
              autoComplete="off"
              className="w-[50px] h-[50px] bg-fullwhite focus:outline-none focus:ring-0 focus:ring-offset-0 border-[#E6E6E6] text-center focus:ring-offset-transparent focus:ring-transparent focus:border-textColorOrange border border-solid rounded-lg shadow-[0px_0px_4px_rgba(0,0,0,0.25)]"
              // value={this.state.otp2}
              onChange={(e) => this.handleChange('otp2', e)}
              tabIndex={2}
              maxLength={1}
              onKeyUp={(e) => this.inputfocus(e)}
            />
            <input
              name="otp3"
              type="text"
              autoComplete="off"
              className="w-[50px] h-[50px] bg-fullwhite focus:outline-none focus:ring-0 focus:ring-offset-0 border-[#E6E6E6] text-center focus:ring-offset-transparent focus:ring-transparent focus:border-textColorOrange border border-solid rounded-lg shadow-[0px_0px_4px_rgba(0,0,0,0.25)]"
              // value={this.state.otp3}
              onChange={(e) => this.handleChange('otp3', e)}
              tabIndex={3}
              maxLength={1}
              onKeyUp={(e) => this.inputfocus(e)}
            />
            <input
              name="otp4"
              type="text"
              autoComplete="off"
              className="w-[50px] h-[50px] bg-fullwhite focus:outline-none focus:ring-0 focus:ring-offset-0 border-[#E6E6E6] text-center focus:ring-offset-transparent focus:ring-transparent focus:border-textColorOrange border border-solid rounded-lg shadow-[0px_0px_4px_rgba(0,0,0,0.25)]"
              // value={this.state.otp4}
              onChange={(e) => this.handleChange('otp4', e)}
              tabIndex={4}
              maxLength={1}
              onKeyUp={(e) => this.inputfocus(e)}
            />

            <input
              name="otp5"
              type="text"
              autoComplete="off"
              className="w-[50px] h-[50px] bg-fullwhite focus:outline-none focus:ring-0 focus:ring-offset-0 border-[#E6E6E6] text-center focus:ring-offset-transparent focus:ring-transparent focus:border-textColorOrange border border-solid rounded-lg shadow-[0px_0px_4px_rgba(0,0,0,0.25)]"
              // value={this.state.otp5}
              onChange={(e) => this.handleChange('otp5', e)}
              tabIndex={5}
              maxLength={1}
              onKeyUp={(e) => this.inputfocus(e)}
            />
            <input
              name="otp6"
              type="text"
              autoComplete="off"
              className="w-[50px] h-[50px] bg-fullwhite focus:outline-none focus:ring-0 focus:ring-offset-0 border-[#E6E6E6] text-center focus:ring-offset-transparent focus:ring-transparent focus:border-textColorOrange border border-solid rounded-lg shadow-[0px_0px_4px_rgba(0,0,0,0.25)]"
              // value={this.state.otp6}
              onChange={(e) => this.handleChange('otp6', e)}
              tabIndex={6}
              maxLength={1}
              onKeyUp={(e) => this.inputfocus(e)}
            />
          </form>
          <div className="text-base">
            <p>
              Tassyklayys kod gelmedimi?{' '}
              <span className="cursor-pointer text-textColorOrange">
                Tazeden iber
              </span>
            </p>
          </div>
          <div>
            <IconLabelButton
              label="Next"
              className="w-32 h-11 rounded-lg bg-[linear-gradient(266.08deg,#FF8D73_1%,#FEB37A_100%)] m-auto"
              labelClassName="m-auto text-white"
            />
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}
