import { Input } from "./components/Input";
import { Review } from "./components/Review";

export const ReviewForm = () => {
  return (
    <div className="w-[42rem] space-y-8 rounded-3xl bg-white p-16">
      <h1 className="w-[42rem] font-meri text-2xl font-black">
        Overall rating
      </h1>
      <div>
        <Review />
        <p className="test-sm font-normal">Click to rate</p>
      </div>
      <Input
        title="Review title"
        placeholder="Example: Since I bought this a month ago, it has been used a lot."
        type="text"
      />

      <p>Would you recommend this product to a friend?</p>

      <div className="flex gap-8">
        <div>
          <input
            className="mr-2 scale-150 accent-[#121633]"
            type="radio"
            id="yes"
            name="fav_language"
            value="yes"
          />{" "}
          <label htmlFor="yes">Yes</label>
        </div>
        <div>
          <input
            className="mr-2 scale-150 accent-[#121633]"
            type="radio"
            id="no"
            name="fav_language"
            value="no"
          />
          <label htmlFor="no">No</label>
        </div>
      </div>

      <Input
        title="Product title"
        placeholder="Example: Since I bought this a month ago, it has been used a lot."
        type="textarea"
      />

      <div className="flex gap-x-2">
        <div className="grow">
          <Input title="Nickname" placeholder="Example: bb27" type="text" />
        </div>
        <div className="grow">
          <Input
            title="Email address (will not be published)"
            placeholder="Example: your@email.com"
            type="text"
          />
        </div>
      </div>
      <div>
        <input
          className="mr-2 scale-150 accent-[#121633]"
          type="radio"
          id="accept"
          name="accept"
          value="accept"
        />
        <label className="cursor-pointer" htmlFor="accept">
          I accept the terms and conditions
        </label>
      </div>
      <p className="text-sm font-medium">
        You will be able to receive emails in connection with this review (eg if
        others comment on your review). All emails contain the option to
        unsubcribe . We can use the text and star rating from your review in
        other marketing.
      </p>
      <button className="rounded-md bg-[#121633] p-4 text-white">
        Submit product review
      </button>
    </div>
  );
};
