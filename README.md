Use a Rails API backend with a React frontend.

Have at least three models on the backend, that include the following:
  At least two one-to-many relationships.
  At least one reciprocal many-to-many relationship (implemented by using 2 has-many-through relationships). Note: in order to accomplish this, your project must include a joins table. This joins table must include a user submittable attribute.
  Full CRUD actions for at least one resource.
  Minimum of create and read actions for EACH resource.

Have at least three different client-side routes using React Router. Be sure to include a nav bar or other UI element that       allows users to navigate between routes.

Implement authentication/authorization, including password protection. A user must be able to:
  sign up with a new user account,
  log in to the site with a secure password and stay logged in via user ID in the session hash, and
  log out of the site.

#--------------------------------------------------------------------------------------------------------------------#

# MODEL #
  users, NFT, reviews
    users has many NFTs, and has many reviews through NFTs
    reviews has many NFTs, has many users through NFTs
    nft belongs to user, belongs to review

#--------------------------------------------------------------------------------------------------------------------#

# ROUTES #
  ternary login on the navbar
  homepage, displaying all NFTs
  user show page
  user create page
  NFT show page
  NFT create page

#--------------------------------------------------------------------------------------------------------------------#

# COMPONENTS #
 App
   Navbar
     UserCard
     UserCreateForm
   NFTSearch
   NFTCreateForm
   NFTContainer
     NFTCard
   NFTShowCard
     NFTCard, specific ID
     UserCard, user posting NFT

#--------------------------------------------------------------------------------------------------------------------#

To-Do's
 - fix nft for sale update
 - fix error for editing/ deleting nfts that you dont own 
 - add username to reviews
 - authorizations
