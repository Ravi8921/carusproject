This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.




























 <div class="container-fluid" id="grad1">
        <div class="row justify-content-center mt-0">
          <div class="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
            <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
              <h2><strong>Sign Up Your User Account</strong></h2>
              <p>Fill all form field to go to next step</p>
              <div class="row">
                <div class="col-md-12 mx-0">
                  <form id="msform">
                    {/* <!-- progressbar --> */}
                    <ul id="progressbar">
                      <li class="active" id="account"><strong>Account</strong></li>
                      <li id="personal"><strong>Personal</strong></li>
                      <li id="payment"><strong>Payment</strong></li>
                      <li id="confirm"><strong>Finish</strong></li>
                    </ul>
                    {/* <!-- fieldsets --> */}
                    <fieldset>
                      <div class="form-card">
                        <h2 class="fs-title">Account Information</h2>
                        <input type="email" name="email" placeholder="Email Id" />
                        <input type="text" name="uname" placeholder="UserName" />
                        <input type="password" name="pwd" placeholder="Password" />
                        <input type="password" name="cpwd" placeholder="Confirm Password" />
                      </div>
                      <input type="button" name="next" class="next action-button" value="Next Step" />
                    </fieldset>

                    <fieldset>
                      <div class="form-card">
                        <h2 class="fs-title">Personal Information</h2>
                        <input type="text" name="fname" placeholder="First Name" />
                        <input type="text" name="lname" placeholder="Last Name" />
                        <input type="text" name="phno" placeholder="Contact No." />
                        <input type="text" name="phno_2" placeholder="Alternate Contact No." />
                      </div>
                      <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
                      <input type="button" name="next" class="next action-button" value="Next Step" />
                    </fieldset>

                    <fieldset>
                      <div class="form-card">
                        <h2 class="fs-title">Payment Information</h2>
                        <div class="radio-group">
                          <div class='radio' data-value="credit"><img src="https://i.imgur.com/XzOzVHZ.jpg" width="200px" height="100px" /></div>
                          <div class='radio' data-value="paypal"><img src="https://i.imgur.com/jXjwZlj.jpg" width="200px" height="100px" /></div>
                          {/* <br> */}
                        </div>
                        <label class="pay">Card Holder Name*</label>
                        <input type="text" name="holdername" placeholder="" />
                        <div class="row">
                          <div class="col-9">
                            <label class="pay">Card Number*</label>
                            <input type="text" name="cardno" placeholder="" />
                          </div>
                          <div class="col-3">
                            <label class="pay">CVC*</label>
                            <input type="password" name="cvcpwd" placeholder="***" />
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-3">
                            <label class="pay">Expiry Date*</label>
                          </div>
                          <div class="col-9">
                            <select class="list-dt" id="month" name="expmonth">
                              <option selected>Month</option>
                              <option>January</option>
                              <option>February</option>
                              <option>March</option>
                              <option>April</option>
                              <option>May</option>
                              <option>June</option>
                              <option>July</option>
                              <option>August</option>
                              <option>September</option>
                              <option>October</option>
                              <option>November</option>
                              <option>December</option>
                            </select>
                            <select class="list-dt" id="year" name="expyear">
                              <option selected>Year</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
                      <input type="button" name="make_payment" class="next action-button" value="Confirm" />
                    </fieldset>

                    <fieldset>
                      <div class="form-card">
                        <h2 class="fs-title text-center">Success !</h2>
                       
                       
                        <div class="row justify-content-center">
                          <div class="col-3">
                            <img src="https://img.icons8.com/color/96/000000/ok--v2.png" class="fit-image" />
                          </div>
                        </div>
                        
                        
                          <div class="row justify-content-center">
                            <div class="col-7 text-center">
                              <h5>You Have Successfully Signed Up</h5>
                            </div>
                          </div>
                        </div>
                        </fieldset>
                      </form>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>