import React from 'react';

const Sigin = () => {
    return (
      
    <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">sigin!</h1>
        <fieldset className="fieldset">
          <label className="label">name</label>
          <input type="email" name='name' className="input" placeholder=" your name" />
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Photo URL</label>
          <input type="email" name='photo url' className="input" placeholder="Photo url" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
    </div>
 
    );
};

export default Sigin;