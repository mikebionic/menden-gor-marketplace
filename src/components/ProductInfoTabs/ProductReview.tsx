import { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { IconLabelButton } from 'common/IconLabelButton';
import { StarRate } from 'common/StarRate';
import { ErrorBoundary } from 'modules/errors';
import { Image } from 'common/Image';
import { routeConstants } from 'navigation';
import { toJsonReview } from 'sapredux/services/transform_data';

const AddReviewField = () => {
  const [inputs, setInputs] = useState({
    ratingValue: 2,
    remark: '',
  });
  const handleChange = (e: any) => {
    let { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };
  const handleSubmit = () => {
    console.log(toJsonReview(inputs));
  };
  // const handleKeyValueChange = (name:string = '', value:any = '') => {
  //   setInputs((inputs) => ({...inputs, [name]:value}))
  // }

  return (
    <>
      <div className="grid grid-flow-row gap-2 auto-rows-max">
        <p className="text-xl font-semibold text-black font-oxygen dark:text-darkTextWhiteColor">
          Your rating
        </p>
        <StarRate
          className="px-1"
          starSize="text-base"
          // name='ratingValue'
          allowHalf={false}
          value={inputs.ratingValue}
          onClick={(e: any) => console.log(e)}
        />
      </div>
      <textarea
        className="font-oxygen border-[#E6E6E6] dark:border-darkComponentColor dark:bg-darkComponentColor rounded dark:text-darkTextWhiteColor mx-1 resize-none h-56"
        placeholder="Type your remark..."
      />
      <div className="grid place-content-start">
        <IconLabelButton
          label="Send"
          className="w-32 h-11 rounded-lg bg-[linear-gradient(266.08deg,#FF8D73_1%,#FEB37A_100%)] dark:bg-[linear-gradient(266.08deg,#6366f1_1%,#6366f1_100%)] hover:opacity-80 m-auto"
          labelClassName="m-auto text-white"
        />
      </div>
    </>
  );
};

const PleaseLoginField = () => (
  <>
    <p>You should login to leave a review</p>
    <Link to={routeConstants.login.route}>Login</Link>
    <Link to={routeConstants.register.route}>Register</Link>
  </>
);

const ProductReview = ({ reviews, loggedIn }: any) => {
  return (
    <ErrorBoundary>
      <div className="grid w-full grid-flow-row gap-6 px-3 py-6 auto-rows-max">
        <h2 className="text-2xl font-semibold text-black uppercase font-oxygen dark:text-darkTextWhiteColor">
          Reviews
        </h2>

        {reviews.map((review: any, idx: number) => (
          <div
            key={idx}
            className="grid gap-4 px-6 py-6 rounded grid-flow-rows auto-rows-auto bg-fullwhite dark:bg-darkComponentColor"
          >
            <div className="grid w-full grid-flow-col gap-8 auto-cols-fr">
              <div className="grid grid-flow-col gap-0 grid-rows-OrderLine grid-cols-OrderLine">
                <div className="row-span-3 p-2 m-auto">
                  <div className="w-12 h-12 overflow-hidden border-2 border-white rounded-full dark:border-darkText ">
                    <Image
                      src={
                        review.avatar ??
                        'https://images.unsplash.com/photo-1610397095767-84a5b4736cbd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                      }
                      alt={review.username ?? 'avatar-icon'}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="col-span-2 mx-0 my-auto">
                  <h2 className="text-sm font-semibold text-black font-oxygen dark:text-darkTextWhiteColor">
                    {review.name}[{review.username}]
                  </h2>
                </div>
                <div className="col-span-2 row-span-2">
                  <StarRate
                    disabled={true}
                    value={review.ratingValue}
                    className="px-1"
                    starSize="text-xs"
                  />
                </div>
              </div>
              <p className="text-base font-bold text-right opacity-40 font-oxygen dark:text-textDarkGray dark:opacity-100">
                {review.createdDate}
              </p>
            </div>
            <div className="grid grid-flow-row auto-rows-max">
              <p className="px-2 text-base text-justify text-black font-oxygen dark:text-darkText">
                {review.remark}
              </p>
            </div>
          </div>
        ))}

        {loggedIn ? <AddReviewField /> : <PleaseLoginField />}
      </div>
    </ErrorBoundary>
  );
};

const mapStateToProps = (state: any) => ({
  loggedIn: state.auth.loggedIn,
});
export default connect(mapStateToProps)(ProductReview);
