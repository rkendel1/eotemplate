import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
	return (
		<div>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.2.96/css/materialdesignicons.min.css" integrity="sha512-LX0YV/MWBEn2dwXCYgQHrpa9HJkwB+S+bnBpifSOTO1No27TqNMKYoAn6ff2FBh03THAzAiiCwQ+aPX+/Qt/Ow==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<div class="container">
<div class="row">
    <div class="col-xl-8">
        <div class="card">
            <div class="card-body pb-0">
                <div class="row align-items-center">
                    <div class="col-md-3">
                        <div class="text-center border-end">
                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="img-fluid avatar-xxl rounded-circle" alt=""/>
                            <h4 class="text-primary font-size-20 mt-3 mb-2">full_name</h4>
                            <h5 class="text-muted font-size-13 mb-0">party</h5>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="ms-3">
                            <div>
                                <h4 class="card-title mb-2">Elected Official Information</h4>
                                <p class="mb-0 text-muted">type, state, district, senate_class</p>
                            </div>
                            <div class="row my-4">
                                <div class="col-md-12">
                                    <div>
                                        <p class="text-muted mb-2 fw-medium"><i class="mdi mdi-email-outline me-2"></i>email
                                        </p>
                                        <p class="text-muted fw-medium mb-0"><i class="mdi mdi-phone-in-talk-outline me-2"></i>phone
                                        </p>
                                    </div>
                                </div>
                            </div>
                         
                            <ul class="nav nav-tabs nav-tabs-custom border-bottom-0 mt-3 nav-justfied" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link px-4 active" data-bs-toggle="tab" href="#Votes-tab" role="tab" aria-selected="false" tabindex="-1">
                                        <span class="d-block d-sm-none"><i class="fas fa-home"></i></span>
                                        <span class="d-none d-sm-block">Votes</span>
                                    </a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link px-4"  href="https://bootdey.com/snippets/view/profile-task-with-team-cards" target="__blank" >
                                        <span class="d-block d-sm-none"><i class="mdi mdi-menu-open"></i></span>
                                        <span class="d-none d-sm-block">Polls</span>
                                    </a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link px-4 "  href="https://bootdey.com/snippets/view/profile-with-team-section" target="__blank" >
                                        <span class="d-block d-sm-none"><i class="mdi mdi-account-group-outline"></i></span>
                                        <span class="d-none d-sm-block"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="tab-content p-4">
                <div class="tab-pane active show" id="Votes-tab" role="tabpanel">
                    <div class="d-flex align-items-center">
                        <div class="flex-1">
                            <h4 class="card-title mb-4">Votes</h4>
                        </div>
                    </div>

                    <div class="row" id="all-Votes">
                        <div class="col-md-6" id="Votes-items-1">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex mb-3">
                                        <div class="flex-grow-1 align-items-start">
                                            <div>
                                                <h6 class="mb-0 text-muted">
                                                    <i class="mdi mdi-circle-medium text-danger fs-3 align-middle"></i>
                                                    <span class="team-date">Poll_Date</span>
                                                </h6>
                                            </div>
                                        </div>
                                        <div class="dropdown ms-2">
                                            <a href="#/" class="dropdown-toggle font-size-16 text-muted" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="mdi mdi-dots-horizontal"></i>
                                            </a>

                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item" href="javascript: void(0);" data-bs-toggle="modal" data-bs-target=".bs-example-new-Votes" onclick="editVotes('Votes-items-1')">Edit</a>
                                                <a class="dropdown-item" href="javascript: void(0);">Share</a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item delete-item" onclick="deleteVotes('Votes-items-1')" data-id="Votes-items-1" href="javascript: void(0);">Delete</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mb-4">
                                        <h5 class="mb-1 font-size-17 team-title">Bill_Number</h5>
                                        <p class="text-muted mb-0 team-description">Bill_Name</p>
                                    </div>
                                    <div class="d-flex">
                                        <div class="avatar-group float-start flex-grow-1 task-assigne">
                                            <div class="avatar-group-item">
                                                <a href="javascript: void(0);" class="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" value="member-6" aria-label="Terrell Soto" data-bs-original-title="Terrell Soto">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="rounded-circle avatar-sm"/>
                                                </a>
                                            </div>
                                            <div class="avatar-group-item">
                                                <a href="javascript: void(0);" class="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" value="member-1" aria-label="Ruhi Shah" data-bs-original-title="Ruhi Shah">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="rounded-circle avatar-sm"/>
                                                </a>
                                            </div>
                                            <div class="avatar-group-item">
                                                <a href="javascript: void(0);" class="d-block" data-bs-toggle="tooltip" data-bs-placement="top" value="member-15" data-bs-original-title="Denny Silva">
                                                    <div class="avatar-sm">
                                                        <div class="avatar-title rounded-circle bg-primary">
                                                            D
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="align-self-end">
                                            <span class="badge badge-soft-danger p-2 team-status">Pending</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6" id="Votes-items-2">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex mb-3">
                                        <div class="flex-grow-1 align-items-start">
                                            <div>
                                                <h6 class="mb-0 text-muted">
                                                    <i class="mdi mdi-circle-medium text-success fs-3 align-middle"></i>
                                                    <span class="team-date">Poll_Date</span>
                                                </h6>
                                            </div>
                                        </div>
                                        <div class="dropdown ms-2">
                                            <a href="#/" class="dropdown-toggle font-size-16 text-muted" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="mdi mdi-dots-horizontal"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item" href="javascript: void(0);" data-bs-toggle="modal" data-bs-target=".bs-example-new-Votes" onclick="editVotes('Votes-items-2')">Edit</a>
                                                <a class="dropdown-item" href="javascript: void(0);">Share</a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item delete-item" href="#/" onclick="deleteVotes('Votes-items-2')" data-id="Votes-items-2">Delete</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mb-4">
                                        <h5 class="mb-1 font-size-17 team-title">Bill_Number</h5>
                                        <p class="text-muted mb-0 team-description">Bill_Name</p>
                                    </div>
                                    <div class="d-flex">
                                        <div class="avatar-group float-start flex-grow-1 task-assigne">
                                            <div class="avatar-group-item">
                                                <a href="javascript: void(0);" class="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" value="member-10" aria-label="Kelly Osborn" data-bs-original-title="Kelly Osborn">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="rounded-circle avatar-sm"/>
                                                </a>
                                            </div>
                                            <div class="avatar-group-item">
                                                <a href="javascript: void(0);" class="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" value="member-2" aria-label="John Page" data-bs-original-title="John Page">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" class="rounded-circle avatar-sm"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="align-self-end">
                                            <span class="badge badge-soft-success p-2 team-status">Completed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6" id="Votes-items-3">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex mb-3">
                                        <div class="flex-grow-1 align-items-start">
                                            <div>
                                                <h6 class="mb-0 text-muted">
                                                    <i class="mdi mdi-circle-medium text-warning fs-3 align-middle"></i>
                                                    <span class="team-date">Poll_Date</span>
                                                </h6>
                                            </div>
                                        </div>
                                        <div class="dropdown ms-2">
                                            <a href="#/" class="dropdown-toggle font-size-16 text-muted" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="mdi mdi-dots-horizontal"></i>
                                            </a>

                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item" href="javascript: void(0);" data-bs-toggle="modal" data-bs-target=".bs-example-new-Votes" onclick="editVotes('Votes-items-3')">Edit</a>
                                                <a class="dropdown-item" href="javascript: void(0);">Share</a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item delete-item" href="javascript: void(0);" data-id="Votes-items-3" onclick="deleteVotes('Votes-items-3')">Delete</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mb-4">
                                        <h5 class="mb-1 font-size-17 team-title">Bill_Number</h5>
                                        <p class="text-muted mb-0 team-description">Bill_Name</p>
                                    </div>
                                    <div class="d-flex">
                                        <div class="avatar-group float-start flex-grow-1 task-assigne">
                                            <div class="avatar-group-item">
                                                <a href="javascript: void(0);" class="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" value="member-3" aria-label="Judy Newland" data-bs-original-title="Judy Newland">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" class="rounded-circle avatar-sm"/>
                                                </a>
                                            </div>
                                            <div class="avatar-group-item">
                                                <a href="javascript: void(0);" class="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" value="member-5" aria-label="Jeffery Legette" data-bs-original-title="Jeffery Legette">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="" class="rounded-circle avatar-sm"/>
                                                </a>
                                            </div>
                                            <div class="avatar-group-item">
                                                <a href="javascript: void(0);" class="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" value="member-6" aria-label="Jose Rosborough" data-bs-original-title="Jose Rosborough">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" class="rounded-circle avatar-sm"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="align-self-end">
                                            <span class="badge badge-soft-warning p-2 team-status">Progress</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6" id="Votes-items-4">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex mb-3">
                                        <div class="flex-grow-1 align-items-start">
                                            <div>
                                                <h6 class="mb-0 text-muted">
                                                    <i class="mdi mdi-circle-medium text-danger fs-3 align-middle"></i>
                                                    <span class="team-date">Poll_Date</span>
                                                </h6>
                                            </div>
                                        </div>
                                        <div class="dropdown ms-2">
                                            <a href="#/" class="dropdown-toggle font-size-16 text-muted" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="mdi mdi-dots-horizontal"></i>
                                            </a>

                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item" href="javascript: void(0);" data-bs-toggle="modal" data-bs-target=".bs-example-new-Votes" onclick="editVotes('Votes-items-4')">Edit</a>
                                                <a class="dropdown-item" href="javascript: void(0);">Share</a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item delete-item" href="#/" data-id="Votes-items-4" onclick="deleteVotes('Votes-items-4')">Delete</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mb-4">
                                        <h5 class="mb-1 font-size-17 team-title">Bill_Number</h5>
                                        <p class="text-muted mb-0 team-description">Bill_Name</p>
                                    </div>
                                    <div class="d-flex">
                                        <div class="avatar-group float-start flex-grow-1 task-assigne">
                                            <div class="avatar-group-item">
                                                <a href="javascript: void(0);" class="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" value="member-10" aria-label="Jansh Wells" data-bs-original-title="Jansh Wells">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="rounded-circle avatar-sm"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="align-self-end">
                                            <span class="badge badge-soft-danger p-2 team-status">Pending</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6" id="Votes-items-5">
                            <div class="card mb-lg-0">
                                <div class="card-body">
                                    <div class="d-flex mb-3">
                                        <div class="flex-grow-1 align-items-start">
                                            <div>
                                                <h6 class="mb-0 text-muted">
                                                    <i class="mdi mdi-circle-medium text-success fs-3 align-middle"></i>
                                                    <span class="team-date">Poll_Date</span>
                                                </h6>
                                            </div>
                                        </div>
                                        <div class="dropdown ms-2">
                                            <a href="#/" class="dropdown-toggle font-size-16 text-muted" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="mdi mdi-dots-horizontal"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a class="dropdown-item" href="javascript: void(0);" data-bs-toggle="modal" data-bs-target=".bs-example-new-Votes" onclick="editVotes('Votes-items-5')">Edit</a>
                                                <a class="dropdown-item" href="javascript: void(0);">Share</a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item delete-item" onclick="deleteVotes('Votes-items-5')" data-id="Votes-items-5" href="javascript: void(0);">Delete</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mb-4">
                                        <h5 class="mb-1 font-size-17 team-title">Bill_Number</h5>
                                        <p class="text-muted mb-0 team-description">Bill_Name</p>
                                    </div>
                                    <div class="d-flex">
                                        <div class="avatar-group float-start flex-grow-1 task-assigne">
                                            <div class="avatar-group-item">
                                                <a href="javascript: void(0);" class="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" value="member-1" aria-label="Ruhi Luft" data-bs-original-title="Ruhi Luft">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="rounded-circle avatar-sm"/>
                                                </a>
                                            </div>
                                            <div class="avatar-group-item">
                                                <a href="javascript: void(0);" class="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" value="member-5" aria-label="Elias Hardage" data-bs-original-title="Elias Hardage">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="" class="rounded-circle avatar-sm"/>
                                                </a>
                                            </div>
                                            <div class="avatar-group-item">
                                                <a href="javascript: void(0);" class="d-inline-block" data-bs-toggle="tooltip" data-bs-placement="top" value="member-10" aria-label="Jansh Wells" data-bs-original-title="Jansh Wells">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="rounded-circle avatar-sm"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="align-self-end">
                                            <span class="badge badge-soft-success p-2 team-status">Completed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
















                

                
            </div>
        </div>
    </div>

    <div class="col-xl-4">
        <div class="card">
            <div class="card-body">
                <div class="pb-2">
                    <h4 class="card-title mb-3">Bio</h4>
                    <p>TBD</p>
                    <ul class="ps-3 mb-0">
                        <li>Placeholder</li>
                        <li>Placeholder</li>
                    </ul>
                    
                </div>
                <hr/>
                <div class="pt-2">
                    <h4 class="card-title mb-4">My Important Issues</h4>
                    <div class="d-flex gap-2 flex-wrap">
                        <span class="badge badge-soft-secondary p-2">Issue1</span>
                        <span class="badge badge-soft-secondary p-2">Issue2</span>
                        <span class="badge badge-soft-secondary p-2">Issue3</span>
                        <span class="badge badge-soft-secondary p-2">Issue3</span>
                        <span class="badge badge-soft-secondary p-2">Issue4</span>
                        <span class="badge badge-soft-secondary p-2">Issue5</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-body">
                <div>
                    <h4 class="card-title mb-4">Personal Details</h4>
                    <div class="table-responsive">
                        <table class="table table-bordered mb-0">
                            <tbody>
                                <tr>
                                    <th scope="row">Name</th>
                                    <td>full_name</td>
                                </tr>
                                <tr>
                                    <th scope="row">Birthday</th>
                                    <td>birthday</td>
                                </tr>
                                <tr>
                                    <th scope="row">Twitter</th>
                                    <td>twitter</td>
                                </tr>
                                <tr>
                                    <th scope="row">Website</th>
                                    <td>url</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-body">
                <div>
                    <h4 class="card-title mb-4">Committee Information</h4>
                    <ul class="list-unstyled work-activity mb-0">
                        <li class="work-item" data-date="Committee Dates">
                            <h6 class="lh-base mb-0">Committee_Name</h6>
                            <p class="font-size-13 mb-2">Committee_Role</p>
                            
                        </li>
                        <li class="work-item" data-date="Committee Dates">
                            <h6 class="lh-base mb-0">Committee_Name</h6>
                            <p class="font-size-13 mb-2">Committee_Role</p>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
		</div>
	);
}
export default App;