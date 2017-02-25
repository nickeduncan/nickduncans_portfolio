<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Action Controller: Exception caught</title>
  <style>
    body {
      background-color: #FAFAFA;
      color: #333;
      margin: 0px;
    }

    body, p, ol, ul, td {
      font-family: helvetica, verdana, arial, sans-serif;
      font-size:   13px;
      line-height: 18px;
    }

    pre {
      font-size: 11px;
      white-space: pre-wrap;
    }

    pre.box {
      border: 1px solid #EEE;
      padding: 10px;
      margin: 0px;
      width: 958px;
    }

    header {
      color: #F0F0F0;
      background: #C52F24;
      padding: 0.5em 1.5em;
    }

    h1 {
      margin: 0.2em 0;
      line-height: 1.1em;
      font-size: 2em;
    }

    h2 {
      color: #C52F24;
      line-height: 25px;
    }

    .details {
      border: 1px solid #D0D0D0;
      border-radius: 4px;
      margin: 1em 0px;
      display: block;
      width: 978px;
    }

    .summary {
      padding: 8px 15px;
      border-bottom: 1px solid #D0D0D0;
      display: block;
    }

    .details pre {
      margin: 5px;
      border: none;
    }

    #container {
      box-sizing: border-box;
      width: 100%;
      padding: 0 1.5em;
    }

    .source * {
      margin: 0px;
      padding: 0px;
    }

    .source {
      border: 1px solid #D9D9D9;
      background: #ECECEC;
      width: 978px;
    }

    .source pre {
      padding: 10px 0px;
      border: none;
    }

    .source .data {
      font-size: 80%;
      overflow: auto;
      background-color: #FFF;
    }

    .info {
      padding: 0.5em;
    }

    .source .data .line_numbers {
      background-color: #ECECEC;
      color: #AAA;
      padding: 1em .5em;
      border-right: 1px solid #DDD;
      text-align: right;
    }

    .line {
      padding-left: 10px;
    }

    .line:hover {
      background-color: #F6F6F6;
    }

    .line.active {
      background-color: #FFCCCC;
    }

    .hidden {
      display: none;
    }

    a { color: #980905; }
    a:visited { color: #666; }
    a.trace-frames { color: #666; }
    a:hover { color: #C52F24; }
    a.trace-frames.selected { color: #C52F24 }

      #route_table {
    margin: 0;
    border-collapse: collapse;
  }

  #route_table thead tr {
    border-bottom: 2px solid #ddd;
  }

  #route_table thead tr.bottom {
    border-bottom: none;
  }

  #route_table thead tr.bottom th {
    padding: 10px 0;
    line-height: 15px;
  }

  #route_table tbody tr {
    border-bottom: 1px solid #ddd;
  }

  #route_table tbody tr:nth-child(odd) {
    background: #f2f2f2;
  }

  #route_table tbody.exact_matches,
  #route_table tbody.fuzzy_matches {
    background-color: LightGoldenRodYellow;
    border-bottom: solid 2px SlateGrey;
  }

  #route_table tbody.exact_matches tr,
  #route_table tbody.fuzzy_matches tr {
    background: none;
    border-bottom: none;
  }

  #route_table td {
    padding: 4px 30px;
  }

  #path_search {
    width: 80%;
    font-size: inherit;
  }

  </style>

  <script>
    var toggle = function(id) {
      var s = document.getElementById(id).style;
      s.display = s.display == 'none' ? 'block' : 'none';
      return false;
    }
    var show = function(id) {
      document.getElementById(id).style.display = 'block';
    }
    var hide = function(id) {
      document.getElementById(id).style.display = 'none';
    }
    var toggleTrace = function() {
      return toggle('blame_trace');
    }
    var toggleSessionDump = function() {
      return toggle('session_dump');
    }
    var toggleEnvDump = function() {
      return toggle('env_dump');
    }
  </script>
</head>
<body>

<header>
  <h1>Routing Error</h1>
</header>
<div id="container">
  <h2>No route matches [GET] &quot;/dist/js/bootstrap.min.js&quot;</h2>

  
<p><code>Rails.root: /Users/nicholasduncan/Desktop/wyncode/eviction</code></p>

<div id="traces">
    <a href="#" onclick="hide(&#39;Framework-Trace&#39;);hide(&#39;Full-Trace&#39;);show(&#39;Application-Trace&#39;);; return false;">Application Trace</a> |
    <a href="#" onclick="hide(&#39;Application-Trace&#39;);hide(&#39;Full-Trace&#39;);show(&#39;Framework-Trace&#39;);; return false;">Framework Trace</a> |
    <a href="#" onclick="hide(&#39;Application-Trace&#39;);hide(&#39;Framework-Trace&#39;);show(&#39;Full-Trace&#39;);; return false;">Full Trace</a> 

    <div id="Application-Trace" style="display: block;">
      <pre><code></code></pre>
    </div>
    <div id="Framework-Trace" style="display: none;">
      <pre><code><a class="trace-frames" data-frame-id="0" href="#">actionpack (5.0.1) lib/action_dispatch/middleware/debug_exceptions.rb:53:in `call&#39;</a><br><a class="trace-frames" data-frame-id="1" href="#">web-console (3.4.0) lib/web_console/middleware.rb:135:in `call_app&#39;</a><br><a class="trace-frames" data-frame-id="2" href="#">web-console (3.4.0) lib/web_console/middleware.rb:28:in `block in call&#39;</a><br><a class="trace-frames" data-frame-id="3" href="#">web-console (3.4.0) lib/web_console/middleware.rb:18:in `catch&#39;</a><br><a class="trace-frames" data-frame-id="4" href="#">web-console (3.4.0) lib/web_console/middleware.rb:18:in `call&#39;</a><br><a class="trace-frames" data-frame-id="5" href="#">actionpack (5.0.1) lib/action_dispatch/middleware/show_exceptions.rb:31:in `call&#39;</a><br><a class="trace-frames" data-frame-id="6" href="#">railties (5.0.1) lib/rails/rack/logger.rb:36:in `call_app&#39;</a><br><a class="trace-frames" data-frame-id="7" href="#">railties (5.0.1) lib/rails/rack/logger.rb:24:in `block in call&#39;</a><br><a class="trace-frames" data-frame-id="8" href="#">activesupport (5.0.1) lib/active_support/tagged_logging.rb:69:in `block in tagged&#39;</a><br><a class="trace-frames" data-frame-id="9" href="#">activesupport (5.0.1) lib/active_support/tagged_logging.rb:26:in `tagged&#39;</a><br><a class="trace-frames" data-frame-id="10" href="#">activesupport (5.0.1) lib/active_support/tagged_logging.rb:69:in `tagged&#39;</a><br><a class="trace-frames" data-frame-id="11" href="#">railties (5.0.1) lib/rails/rack/logger.rb:24:in `call&#39;</a><br><a class="trace-frames" data-frame-id="12" href="#">sprockets-rails (3.2.0) lib/sprockets/rails/quiet_assets.rb:13:in `call&#39;</a><br><a class="trace-frames" data-frame-id="13" href="#">actionpack (5.0.1) lib/action_dispatch/middleware/request_id.rb:24:in `call&#39;</a><br><a class="trace-frames" data-frame-id="14" href="#">rack (2.0.1) lib/rack/method_override.rb:22:in `call&#39;</a><br><a class="trace-frames" data-frame-id="15" href="#">rack (2.0.1) lib/rack/runtime.rb:22:in `call&#39;</a><br><a class="trace-frames" data-frame-id="16" href="#">activesupport (5.0.1) lib/active_support/cache/strategy/local_cache_middleware.rb:28:in `call&#39;</a><br><a class="trace-frames" data-frame-id="17" href="#">actionpack (5.0.1) lib/action_dispatch/middleware/executor.rb:12:in `call&#39;</a><br><a class="trace-frames" data-frame-id="18" href="#">actionpack (5.0.1) lib/action_dispatch/middleware/static.rb:136:in `call&#39;</a><br><a class="trace-frames" data-frame-id="19" href="#">rack (2.0.1) lib/rack/sendfile.rb:111:in `call&#39;</a><br><a class="trace-frames" data-frame-id="20" href="#">railties (5.0.1) lib/rails/engine.rb:522:in `call&#39;</a><br><a class="trace-frames" data-frame-id="21" href="#">puma (3.7.0) lib/puma/configuration.rb:226:in `call&#39;</a><br><a class="trace-frames" data-frame-id="22" href="#">puma (3.7.0) lib/puma/server.rb:578:in `handle_request&#39;</a><br><a class="trace-frames" data-frame-id="23" href="#">puma (3.7.0) lib/puma/server.rb:415:in `process_client&#39;</a><br><a class="trace-frames" data-frame-id="24" href="#">puma (3.7.0) lib/puma/server.rb:275:in `block in run&#39;</a><br><a class="trace-frames" data-frame-id="25" href="#">puma (3.7.0) lib/puma/thread_pool.rb:120:in `block in spawn_thread&#39;</a><br></code></pre>
    </div>
    <div id="Full-Trace" style="display: none;">
      <pre><code><a class="trace-frames" data-frame-id="0" href="#">actionpack (5.0.1) lib/action_dispatch/middleware/debug_exceptions.rb:53:in `call&#39;</a><br><a class="trace-frames" data-frame-id="1" href="#">web-console (3.4.0) lib/web_console/middleware.rb:135:in `call_app&#39;</a><br><a class="trace-frames" data-frame-id="2" href="#">web-console (3.4.0) lib/web_console/middleware.rb:28:in `block in call&#39;</a><br><a class="trace-frames" data-frame-id="3" href="#">web-console (3.4.0) lib/web_console/middleware.rb:18:in `catch&#39;</a><br><a class="trace-frames" data-frame-id="4" href="#">web-console (3.4.0) lib/web_console/middleware.rb:18:in `call&#39;</a><br><a class="trace-frames" data-frame-id="5" href="#">actionpack (5.0.1) lib/action_dispatch/middleware/show_exceptions.rb:31:in `call&#39;</a><br><a class="trace-frames" data-frame-id="6" href="#">railties (5.0.1) lib/rails/rack/logger.rb:36:in `call_app&#39;</a><br><a class="trace-frames" data-frame-id="7" href="#">railties (5.0.1) lib/rails/rack/logger.rb:24:in `block in call&#39;</a><br><a class="trace-frames" data-frame-id="8" href="#">activesupport (5.0.1) lib/active_support/tagged_logging.rb:69:in `block in tagged&#39;</a><br><a class="trace-frames" data-frame-id="9" href="#">activesupport (5.0.1) lib/active_support/tagged_logging.rb:26:in `tagged&#39;</a><br><a class="trace-frames" data-frame-id="10" href="#">activesupport (5.0.1) lib/active_support/tagged_logging.rb:69:in `tagged&#39;</a><br><a class="trace-frames" data-frame-id="11" href="#">railties (5.0.1) lib/rails/rack/logger.rb:24:in `call&#39;</a><br><a class="trace-frames" data-frame-id="12" href="#">sprockets-rails (3.2.0) lib/sprockets/rails/quiet_assets.rb:13:in `call&#39;</a><br><a class="trace-frames" data-frame-id="13" href="#">actionpack (5.0.1) lib/action_dispatch/middleware/request_id.rb:24:in `call&#39;</a><br><a class="trace-frames" data-frame-id="14" href="#">rack (2.0.1) lib/rack/method_override.rb:22:in `call&#39;</a><br><a class="trace-frames" data-frame-id="15" href="#">rack (2.0.1) lib/rack/runtime.rb:22:in `call&#39;</a><br><a class="trace-frames" data-frame-id="16" href="#">activesupport (5.0.1) lib/active_support/cache/strategy/local_cache_middleware.rb:28:in `call&#39;</a><br><a class="trace-frames" data-frame-id="17" href="#">actionpack (5.0.1) lib/action_dispatch/middleware/executor.rb:12:in `call&#39;</a><br><a class="trace-frames" data-frame-id="18" href="#">actionpack (5.0.1) lib/action_dispatch/middleware/static.rb:136:in `call&#39;</a><br><a class="trace-frames" data-frame-id="19" href="#">rack (2.0.1) lib/rack/sendfile.rb:111:in `call&#39;</a><br><a class="trace-frames" data-frame-id="20" href="#">railties (5.0.1) lib/rails/engine.rb:522:in `call&#39;</a><br><a class="trace-frames" data-frame-id="21" href="#">puma (3.7.0) lib/puma/configuration.rb:226:in `call&#39;</a><br><a class="trace-frames" data-frame-id="22" href="#">puma (3.7.0) lib/puma/server.rb:578:in `handle_request&#39;</a><br><a class="trace-frames" data-frame-id="23" href="#">puma (3.7.0) lib/puma/server.rb:415:in `process_client&#39;</a><br><a class="trace-frames" data-frame-id="24" href="#">puma (3.7.0) lib/puma/server.rb:275:in `block in run&#39;</a><br><a class="trace-frames" data-frame-id="25" href="#">puma (3.7.0) lib/puma/thread_pool.rb:120:in `block in spawn_thread&#39;</a><br></code></pre>
    </div>

  <script type="text/javascript">
    var traceFrames = document.getElementsByClassName('trace-frames');
    var selectedFrame, currentSource = document.getElementById('frame-source-0');

    // Add click listeners for all stack frames
    for (var i = 0; i < traceFrames.length; i++) {
      traceFrames[i].addEventListener('click', function(e) {
        e.preventDefault();
        var target = e.target;
        var frame_id = target.dataset.frameId;

        if (selectedFrame) {
          selectedFrame.className = selectedFrame.className.replace("selected", "");
        }

        target.className += " selected";
        selectedFrame = target;

        // Change the extracted source code
        changeSourceExtract(frame_id);
      });

      function changeSourceExtract(frame_id) {
        var el = document.getElementById('frame-source-' + frame_id);
        if (currentSource && el) {
          currentSource.className += " hidden";
          el.className = el.className.replace(" hidden", "");
          currentSource = el;
        }
      }
    }
  </script>
</div>


    <h2>
      Routes
    </h2>

    <p>
      Routes match in priority from top to bottom
    </p>

    
<table id='route_table' class='route_table'>
  <thead>
    <tr>
      <th>Helper</th>
      <th>HTTP Verb</th>
      <th>Path</th>
      <th>Controller#Action</th>
    </tr>
    <tr class='bottom'>
      <th>
        <a data-route-helper="_path" title="Returns a relative path (without the http or domain)" href="#">Path</a> /
        <a data-route-helper="_url" title="Returns an absolute url (with the http and domain)" href="#">Url</a>
      </th>
      <th>
      </th>
      <th>
        <input id="search" placeholder="Path Match" type="search" name="path[]" />
      </th>
      <th>
      </th>
    </tr>
  </thead>
  <tbody class='exact_matches' id='exact_matches'>
  </tbody>
  <tbody class='fuzzy_matches' id='fuzzy_matches'>
  </tbody>
  <tbody>
    <tr class='route_row' data-helper='path'>
  <td data-route-name='root'>
      root<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/'>
    /
  </td>
  <td>
    <p>eviction_cases#index</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='site_search'>
      site_search<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/site/search(.:format)'>
    /site/search(.:format)
  </td>
  <td>
    <p>site#search</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td>
    POST
  </td>
  <td data-route-path='/site/search(.:format)'>
    /site/search(.:format)
  </td>
  <td>
    <p>site#search</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='complaint_eviction_case'>
      complaint_eviction_case<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/eviction_cases/:id/complaint(.:format)'>
    /eviction_cases/:id/complaint(.:format)
  </td>
  <td>
    <p>eviction_cases#complaint</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='default_eviction_case'>
      default_eviction_case<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/eviction_cases/:id/default(.:format)'>
    /eviction_cases/:id/default(.:format)
  </td>
  <td>
    <p>eviction_cases#default</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='strike_eviction_case'>
      strike_eviction_case<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/eviction_cases/:id/strike(.:format)'>
    /eviction_cases/:id/strike(.:format)
  </td>
  <td>
    <p>eviction_cases#strike</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='dismiss_eviction_case'>
      dismiss_eviction_case<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/eviction_cases/:id/dismiss(.:format)'>
    /eviction_cases/:id/dismiss(.:format)
  </td>
  <td>
    <p>eviction_cases#dismiss</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='eviction_cases'>
      eviction_cases<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/eviction_cases(.:format)'>
    /eviction_cases(.:format)
  </td>
  <td>
    <p>eviction_cases#index</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td>
    POST
  </td>
  <td data-route-path='/eviction_cases(.:format)'>
    /eviction_cases(.:format)
  </td>
  <td>
    <p>eviction_cases#create</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='new_eviction_case'>
      new_eviction_case<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/eviction_cases/new(.:format)'>
    /eviction_cases/new(.:format)
  </td>
  <td>
    <p>eviction_cases#new</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='edit_eviction_case'>
      edit_eviction_case<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/eviction_cases/:id/edit(.:format)'>
    /eviction_cases/:id/edit(.:format)
  </td>
  <td>
    <p>eviction_cases#edit</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='eviction_case'>
      eviction_case<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/eviction_cases/:id(.:format)'>
    /eviction_cases/:id(.:format)
  </td>
  <td>
    <p>eviction_cases#show</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td>
    PATCH
  </td>
  <td data-route-path='/eviction_cases/:id(.:format)'>
    /eviction_cases/:id(.:format)
  </td>
  <td>
    <p>eviction_cases#update</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td>
    PUT
  </td>
  <td data-route-path='/eviction_cases/:id(.:format)'>
    /eviction_cases/:id(.:format)
  </td>
  <td>
    <p>eviction_cases#update</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td>
    DELETE
  </td>
  <td data-route-path='/eviction_cases/:id(.:format)'>
    /eviction_cases/:id(.:format)
  </td>
  <td>
    <p>eviction_cases#destroy</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='secret'>
      secret<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/secret(.:format)'>
    /secret(.:format)
  </td>
  <td>
    <p>page#secret</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='register'>
      register<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/register(.:format)'>
    /register(.:format)
  </td>
  <td>
    <p>users#new</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='users'>
      users<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/users(.:format)'>
    /users(.:format)
  </td>
  <td>
    <p>users#index</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td>
    POST
  </td>
  <td data-route-path='/users(.:format)'>
    /users(.:format)
  </td>
  <td>
    <p>users#create</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='new_user'>
      new_user<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/users/new(.:format)'>
    /users/new(.:format)
  </td>
  <td>
    <p>users#new</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='edit_user'>
      edit_user<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/users/:id/edit(.:format)'>
    /users/:id/edit(.:format)
  </td>
  <td>
    <p>users#edit</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='user'>
      user<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/users/:id(.:format)'>
    /users/:id(.:format)
  </td>
  <td>
    <p>users#show</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td>
    PATCH
  </td>
  <td data-route-path='/users/:id(.:format)'>
    /users/:id(.:format)
  </td>
  <td>
    <p>users#update</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td>
    PUT
  </td>
  <td data-route-path='/users/:id(.:format)'>
    /users/:id(.:format)
  </td>
  <td>
    <p>users#update</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td>
    DELETE
  </td>
  <td data-route-path='/users/:id(.:format)'>
    /users/:id(.:format)
  </td>
  <td>
    <p>users#destroy</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='login'>
      login<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/login(.:format)'>
    /login(.:format)
  </td>
  <td>
    <p>sessions#new</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td>
    POST
  </td>
  <td data-route-path='/login(.:format)'>
    /login(.:format)
  </td>
  <td>
    <p>sessions#create</p>
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='logout'>
      logout<span class='helper'>_path</span>
  </td>
  <td>
    GET
  </td>
  <td data-route-path='/logout(.:format)'>
    /logout(.:format)
  </td>
  <td>
    <p>sessions#destroy</p>
  </td>
</tr>

  </tbody>
</table>

<script type='text/javascript'>
  // support forEarch iterator on NodeList
  NodeList.prototype.forEach = Array.prototype.forEach;

  // Enables path search functionality
  function setupMatchPaths() {
    // Check if there are any matched results in a section
    function checkNoMatch(section, noMatchText) {
      if (section.children.length <= 1) {
        section.innerHTML += noMatchText;
      }
    }

    // get JSON from url and invoke callback with result
    function getJSON(url, success) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onload = function() {
        if (this.status == 200)
          success(JSON.parse(this.response));
      };
      xhr.send();
    }

    function delayedKeyup(input, callback) {
      var timeout;
      input.onkeyup = function(){
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(callback, 300);
      }
    }

    // remove params or fragments
    function sanitizePath(path) {
      return path.replace(/[#?].*/, '');
    }

    var pathElements = document.querySelectorAll('#route_table [data-route-path]'),
        searchElem   = document.querySelector('#search'),
        exactSection = document.querySelector('#exact_matches'),
        fuzzySection = document.querySelector('#fuzzy_matches');

    // Remove matches when no search value is present
    searchElem.onblur = function(e) {
      if (searchElem.value === "") {
        exactSection.innerHTML = "";
        fuzzySection.innerHTML = "";
      }
    }

    // On key press perform a search for matching paths
    delayedKeyup(searchElem, function() {
      var path = sanitizePath(searchElem.value),
          defaultExactMatch = '<tr><th colspan="4">Paths Matching (' + path +'):</th></tr>',
          defaultFuzzyMatch = '<tr><th colspan="4">Paths Containing (' + path +'):</th></tr>',
          noExactMatch      = '<tr><th colspan="4">No Exact Matches Found</th></tr>',
          noFuzzyMatch      = '<tr><th colspan="4">No Fuzzy Matches Found</th></tr>';

      if (!path)
        return searchElem.onblur();

      getJSON('/rails/info/routes?path=' + path, function(matches){
        // Clear out results section
        exactSection.innerHTML = defaultExactMatch;
        fuzzySection.innerHTML = defaultFuzzyMatch;

        // Display exact matches and fuzzy matches
        pathElements.forEach(function(elem) {
          var elemPath = elem.getAttribute('data-route-path');

          if (matches['exact'].indexOf(elemPath) != -1)
            exactSection.appendChild(elem.parentNode.cloneNode(true));

          if (matches['fuzzy'].indexOf(elemPath) != -1)
            fuzzySection.appendChild(elem.parentNode.cloneNode(true));
        })

        // Display 'No Matches' message when no matches are found
        checkNoMatch(exactSection, noExactMatch);
        checkNoMatch(fuzzySection, noFuzzyMatch);
      })
    })
  }

  // Enables functionality to toggle between `_path` and `_url` helper suffixes
  function setupRouteToggleHelperLinks() {

    // Sets content for each element
    function setValOn(elems, val) {
      elems.forEach(function(elem) {
        elem.innerHTML = val;
      });
    }

    // Sets onClick event for each element
    function onClick(elems, func) {
      elems.forEach(function(elem) {
        elem.onclick = func;
      });
    }

    var toggleLinks = document.querySelectorAll('#route_table [data-route-helper]');

    onClick(toggleLinks, function(){
      var helperTxt   = this.getAttribute("data-route-helper"),
          helperElems = document.querySelectorAll('[data-route-name] span.helper');

      setValOn(helperElems, helperTxt);
    });
  }

  setupMatchPaths();
  setupRouteToggleHelperLinks();
</script>


  
<h2 style="margin-top: 30px">Request</h2>
<p><b>Parameters</b>:</p> <pre>None</pre>

<div class="details">
  <div class="summary"><a href="#" onclick="return toggleSessionDump()">Toggle session dump</a></div>
  <div id="session_dump" style="display:none"><pre>_csrf_token: &quot;Oc7b1Y08etseRxnpxy3FB2Nj5iTHgHzyCwGWVsw8dhg=&quot;
session_id: &quot;e446ca58358bb06defad73e716889bbe&quot;
user_id: 1</pre></div>
</div>

<div class="details">
  <div class="summary"><a href="#" onclick="return toggleEnvDump()">Toggle env dump</a></div>
  <div id="env_dump" style="display:none"><pre>GATEWAY_INTERFACE: &quot;CGI/1.2&quot;
HTTP_ACCEPT: &quot;*/*&quot;
HTTP_ACCEPT_ENCODING: &quot;gzip, deflate, sdch, br&quot;
HTTP_ACCEPT_LANGUAGE: &quot;en-US,en;q=0.8&quot;
HTTP_CACHE_CONTROL: &quot;no-cache&quot;
HTTP_PRAGMA: &quot;no-cache&quot;
HTTP_VERSION: &quot;HTTP/1.1&quot;
ORIGINAL_SCRIPT_NAME: &quot;&quot;
REMOTE_ADDR: &quot;127.0.0.1&quot;
SERVER_NAME: &quot;localhost&quot;
SERVER_PROTOCOL: &quot;HTTP/1.1&quot;</pre></div>
</div>

<h2 style="margin-top: 30px">Response</h2>
<p><b>Headers</b>:</p> <pre>None</pre>

</div>


<div id="console"
  data-mount-point='/__web_console'
  data-session-id='7929d5dab29b3f92b89fbdafffb9a506'
  data-prompt-label='>> '>
</div>


<script type="text/javascript" data-template="console">
(function() {
  /**
 * Constructor for command storage.
 * It uses localStorage if available. Otherwise fallback to normal JS array.
 */
function CommandStorage() {
  this.previousCommands = [];
  var previousCommandOffset = 0;
  var hasLocalStorage = typeof window.localStorage !== 'undefined';
  var STORAGE_KEY = "web_console_previous_commands";
  var MAX_STORAGE = 100;

  if (hasLocalStorage) {
    this.previousCommands = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    previousCommandOffset = this.previousCommands.length;
  }

  this.addCommand = function(command) {
    previousCommandOffset = this.previousCommands.push(command);

    if (previousCommandOffset > MAX_STORAGE) {
      this.previousCommands.splice(0, 1);
      previousCommandOffset = MAX_STORAGE;
    }

    if (hasLocalStorage) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.previousCommands));
    }
  };

  this.navigate = function(offset) {
    previousCommandOffset += offset;

    if (previousCommandOffset < 0) {
      previousCommandOffset = -1;
      return null;
    }

    if (previousCommandOffset >= this.previousCommands.length) {
      previousCommandOffset = this.previousCommands.length;
      return null;
    }

    return this.previousCommands[previousCommandOffset];
  }
}

function Autocomplete(_words, prefix) {
  this.words = prepareWords(_words);
  this.current = -1;
  this.left = 0; // [left, right)
  this.right = this.words.length;
  this.confirmed = false;

  function createSpan(label, className) {
    var el = document.createElement('span');
    addClass(el, className);
    el.innerText = label;
    return el;
  }

  function prepareWords(words) {
    // convert into an object with priority and element
    var res = new Array(words.length);
    for (var i = 0, ind = 0; i < words.length; ++i) {
      res[i] = new Array(words[i].length);
      for (var j = 0; j < words[i].length; ++j) {
        res[i][j] = {
          word: words[i][j],
          priority: i,
          element: createSpan(words[i][j], 'trimmed keyword')
        };
      }
    }
    // flatten and sort by alphabetical order to refine incrementally
    res = flatten(res);
    res.sort(function(a, b) { return a.word == b.word ? 0 : (a.word < b.word ? -1 : 1); });
    for (var i = 0; i < res.length; ++i) res[i].element.dataset.index = i;
    return res;
  }

  this.view = document.createElement('pre');
  addClass(this.view, 'auto-complete console-message');
  this.view.appendChild(this.prefix = createSpan('...', 'trimmed keyword'));
  this.view.appendChild(this.stage = document.createElement('span'));
  this.elements = this.stage.children;
  this.view.appendChild(this.suffix = createSpan('...', 'trimmed keyword'));

  this.refine(prefix || '');
}

Autocomplete.prototype.getSelectedWord = function() {
  return this.lastSelected && this.lastSelected.innerText;
};

Autocomplete.prototype.onFinished = function(callback) {
  this.onFinishedCallback = callback;
  if (this.confirmed) callback(this.confirmed);
};

Autocomplete.prototype.onKeyDown = function(ev) {
  var self = this;
  if (!this.elements.length) return;

  function move(nextCurrent) {
    if (self.lastSelected) removeClass(self.lastSelected, 'selected');
    addClass(self.lastSelected = self.elements[nextCurrent], 'selected');
    self.trim(self.current, true);
    self.trim(nextCurrent, false);
    self.current = nextCurrent;
  }

  switch (ev.keyCode) {
    case 69:
      if (ev.ctrlKey) {
        move(this.current + 1 >= this.elements.length ? 0 : this.current + 1);
        return true;
      }
      return false;
    case 9: // Tab
      if (ev.shiftKey) { // move back
        move(this.current - 1 < 0 ? this.elements.length - 1 : this.current - 1);
      } else { // move next
        move(this.current + 1 >= this.elements.length ? 0 : this.current + 1);
      }
      return true;
    case 13: // Enter
      this.finish();
      return true;
    case 27: // Esc
      this.cancel();
      return true;
    case 37: case 38: case 39: case 40: // disable using arrow keys on completing
      return true;
  }

  return false;
};

Autocomplete.prototype.trim = function(from, needToTrim) {
  var self = this;
  var num = 5;

  if (this.elements.length > num) {
    (0 < from ? removeClass : addClass)(this.prefix, 'trimmed');
    (from + num < this.elements.length ? removeClass : addClass)(this.suffix, 'trimmed');
  } else {
    addClass(this.prefix, 'trimmed');
    addClass(this.suffix, 'trimmed');
  }

  function iterate(x) {
    for (var i = 0; i < num; ++i, ++x) if (0 <= x && x < self.elements.length) {
      toggleClass(self.elements[x], 'trimmed');
    }
  }

  var toggleClass = needToTrim ? addClass : removeClass;
  if (from < 0) {
    iterate(0);
  } else if (from + num - 1 >= this.elements.length) {
    iterate(this.elements.length - num);
  } else {
    iterate(from);
  }
};

Autocomplete.prototype.refine = function(prefix) {
  if (this.confirmed) return;
  var inc = !this.prev || (prefix.length >= this.prev.length);
  this.prev = prefix;
  var self = this;

  function remove(parent, child) {
    if (parent == child.parentNode) parent.removeChild(child);
  }

  function toggle(el) {
    return inc ? remove(self.stage, el) : self.stage.appendChild(el);
  }

  function startsWith(str, prefix) {
    return !prefix || str.substr(0, prefix.length) === prefix;
  }

  function moveRight(l, r) {
    while (l < r && inc !== startsWith(self.words[l].word, prefix)) toggle(self.words[l++].element);
    return l;
  }

  function moveLeft(l, r) {
    while (l < r - 1 && inc !== startsWith(self.words[r-1].word, prefix)) toggle(self.words[--r].element);
    return r;
  }

  self.trim(self.current, true); // reset trimming

  // Refine the range of words having same prefix
  if (inc) {
    self.left = moveRight(self.left, self.right);
    self.right = moveLeft(self.left, self.right);
  } else {
    self.left = moveLeft(-1, self.left);
    self.right = moveRight(self.right, self.words.length);
  }

  // Render elements with sorting by scope groups
  var words = this.words.slice(this.left, this.right);
  words.sort(function(a, b) { return a.priority == b.priority ? (a.word < b.word ? -1 : 1) : (a.priority < b.priority ? -1 : 1); });
  removeAllChildren(this.elements);
  for (var i = 0; i < words.length; ++i) {
    this.stage.appendChild(words[i].element);
  }

  // Keep a previous selected element if the refined range includes the element
  if (this.lastSelected && this.left <= this.lastSelected.dataset.index && this.lastSelected.dataset.index < this.right) {
    this.current = Array.prototype.indexOf.call(this.elements, this.lastSelected);
    this.trim(this.current, false);
  } else {
    if (this.lastSelected) removeClass(this.lastSelected, 'selected');
    this.lastSelected = null;
    this.current = -1;
    this.trim(0, false);
  }

  if (self.left + 1 == self.right) {
    self.current = 0;
    self.finish();
  } else if (self.left == self.right) {
    self.cancel();
  }
};

Autocomplete.prototype.finish = function() {
  if (0 <= this.current && this.current < this.elements.length) {
    this.confirmed = this.elements[this.current].innerText;
    if (this.onFinishedCallback) this.onFinishedCallback(this.confirmed);
    this.removeView();
  } else {
    this.cancel();
  }
};

Autocomplete.prototype.cancel = function() {
  if (this.onFinishedCallback) this.onFinishedCallback();
  this.removeView();
};

Autocomplete.prototype.removeView = function() {
  if (this.view.parentNode) this.view.parentNode.removeChild(this.view);
  removeAllChildren(this.view);
}

// HTML strings for dynamic elements.
var consoleInnerHtml = "<div class=\'resizer layer\'><\/div>\n<div class=\'console-outer layer\'>\n  <div class=\'console-actions\'>\n    <div class=\'close-button button\' title=\'close\'>x<\/div>\n  <\/div>\n  <div class=\'console-inner\'><\/div>\n<\/div>\n<input class=\'clipboard\' type=\'text\'>\n"
;
var promptBoxHtml = "<span class=\'console-prompt-label\'><\/span>\n<pre class=\'console-prompt-display\'><\/pre>\n"
;
// CSS
var consoleStyleCss = ".console .pos-absolute { position: absolute; }\n.console .pos-fixed { position: fixed; }\n.console .pos-right { right: 0; }\n.console .border-box { box-sizing: border-box; }\n.console .layer { width: 100%; height: 100%; }\n.console .layer.console-outer { z-index: 1; }\n.console .layer.resizer { z-index: 2; }\n.console { position: fixed; left: 0; bottom: 0; width: 100%; height: 148px; padding: 0; margin: 0; background: none repeat scroll 0% 0% #333; z-index: 9999; }\n.console .console-outer { overflow: auto; padding-top: 4px; }\n.console .console-inner { font-family: monospace; font-size: 11px; width: 100%; height: 100%; overflow: none; background: #333; }\n.console .console-prompt-box { color: #FFF; }\n.console .console-message { color: #1AD027; margin: 0; border: 0; white-space: pre-wrap; background-color: #333; padding: 0; }\n.console .console-message.error-message { color: #fc9; }\n.console .console-message.auto-complete { word-break: break-all; }\n.console .console-message.auto-complete .keyword { margin-right: 11px; }\n.console .console-message.auto-complete .keyword.selected { background: #FFF; color: #000; }\n.console .console-message.auto-complete .hidden { display: none; }\n.console .console-message.auto-complete .trimmed { display: none; }\n.console .console-hint { color: #096; }\n.console .console-focus .console-cursor { background: #FEFEFE; color: #333; font-weight: bold; }\n.console .resizer { background: #333; width: 100%; height: 4px; cursor: ns-resize; }\n.console .console-actions { padding-right: 3px; }\n.console .console-actions .button { float: left; }\n.console .button { cursor: pointer; border-radius: 1px; font-family: monospace; font-size: 13px; width: 14px; height: 14px; line-height: 14px; text-align: center; color: #ccc; }\n.console .button:hover { background: #666; color: #fff; }\n.console .button.close-button:hover { background: #966; }\n.console .clipboard { height: 0px; padding: 0px; margin: 0px; width: 0px; margin-left: -1000px; }\n.console .console-prompt-label { display: inline; color: #FFF; background: none repeat scroll 0% 0% #333; border: 0; padding: 0; }\n.console .console-prompt-display { display: inline; color: #FFF; background: none repeat scroll 0% 0% #333; border: 0; padding: 0; }\n.console.full-screen { height: 100%; }\n.console.full-screen .console-outer { padding-top: 3px; }\n.console.full-screen .resizer { display: none; }\n.console.full-screen .close-button { display: none; }\n"
;
// Insert a style element with the unique ID
var styleElementId = 'sr02459pvbvrmhco';

// REPLConsole Constructor
function REPLConsole(config) {
  function getConfig(key, defaultValue) {
    return config && config[key] || defaultValue;
  }

  this.commandStorage = new CommandStorage();
  this.prompt = getConfig('promptLabel', ' >>');
  this.mountPoint = getConfig('mountPoint');
  this.sessionId = getConfig('sessionId');
  this.autocomplete = false;
}

REPLConsole.prototype.getSessionUrl = function(path) {
  var parts = [ this.mountPoint, 'repl_sessions', this.sessionId ];
  if (path) {
    parts.push(path);
  }
  // Join and remove duplicate slashes.
  return parts.join('/').replace(/([^:]\/)\/+/g, '$1');
};

REPLConsole.prototype.contextRequest = function(keyword, callback) {
  putRequest(this.getSessionUrl(), 'context=' + getContext(keyword), function(xhr) {
    if (xhr.status == 200) {
      callback(null, JSON.parse(xhr.responseText));
    } else {
      callback(xhr.statusText);
    }
  });
};

REPLConsole.prototype.commandHandle = function(line, callback) {
  var self = this;
  var params = 'input=' + encodeURIComponent(line);
  callback = callback || function() {};

  function isSuccess(status) {
    return status >= 200 && status < 300 || status === 304;
  }

  function parseJSON(text) {
    try {
      return JSON.parse(text);
    } catch (e) {
      return null;
    }
  }

  function getErrorText(xhr) {
    if (!xhr.status) {
      return "Connection Refused";
    } else {
      return xhr.status + ' ' + xhr.statusText;
    }
  }

  putRequest(self.getSessionUrl(), params, function(xhr) {
    var response = parseJSON(xhr.responseText);
    var result   = isSuccess(xhr.status);
    if (result) {
      self.writeOutput(response.output);
    } else {
      if (response && response.output) {
        self.writeError(response.output);
      } else {
        self.writeError(getErrorText(xhr));
      }
    }
    callback(result, response);
  });
};

REPLConsole.prototype.uninstall = function() {
  this.container.parentNode.removeChild(this.container);
};

REPLConsole.prototype.install = function(container) {
  var _this = this;

  document.onkeydown = function(ev) {
    if (_this.focused) { _this.onKeyDown(ev); }
  };

  document.onkeypress = function(ev) {
    if (_this.focused) { _this.onKeyPress(ev); }
  };

  document.addEventListener('mousedown', function(ev) {
    var el = ev.target || ev.srcElement;

    if (el) {
      do {
        if (el === container) {
          _this.focus();
          return;
        }
      } while (el = el.parentNode);

      _this.blur();
    }
  });

  // Render the console.
  container.innerHTML = consoleInnerHtml;

  var consoleOuter = findChild(container, 'console-outer');
  var consoleActions = findChild(consoleOuter, 'console-actions');

  addClass(container, 'console');
  addClass(container.getElementsByClassName('layer'), 'pos-absolute border-box');
  addClass(container.getElementsByClassName('button'), 'border-box');
  addClass(consoleActions, 'pos-fixed pos-right');

  // Make the console resizable.
  function resizeContainer(ev) {
    var startY              = ev.clientY;
    var startHeight         = parseInt(document.defaultView.getComputedStyle(container).height, 10);
    var scrollTopStart      = consoleOuter.scrollTop;
    var clientHeightStart   = consoleOuter.clientHeight;

    var doDrag = function(e) {
      container.style.height = (startHeight + startY - e.clientY) + 'px';
      consoleOuter.scrollTop = scrollTopStart + (clientHeightStart - consoleOuter.clientHeight);
      shiftConsoleActions();
    };

    var stopDrag = function(e) {
      document.documentElement.removeEventListener('mousemove', doDrag, false);
      document.documentElement.removeEventListener('mouseup', stopDrag, false);
    };

    document.documentElement.addEventListener('mousemove', doDrag, false);
    document.documentElement.addEventListener('mouseup', stopDrag, false);
  }

  function closeContainer(ev) {
    container.parentNode.removeChild(container);
  }

  var shifted = false;
  function shiftConsoleActions() {
    if (consoleOuter.scrollHeight > consoleOuter.clientHeight) {
      var widthDiff = document.documentElement.clientWidth - consoleOuter.clientWidth;
      if (shifted || ! widthDiff) return;
      shifted = true;
      consoleActions.style.marginRight = widthDiff + 'px';
    } else if (shifted) {
      shifted = false;
      consoleActions.style.marginRight = '0px';
    }
  }

  // Initialize
  this.container = container;
  this.outer = consoleOuter;
  this.inner = findChild(this.outer, 'console-inner');
  this.clipboard = findChild(container, 'clipboard');
  this.suggestWait = 1500;
  this.newPromptBox();
  this.insertCss();

  findChild(container, 'resizer').addEventListener('mousedown', resizeContainer);
  findChild(consoleActions, 'close-button').addEventListener('click', closeContainer);
  consoleOuter.addEventListener('DOMNodeInserted', shiftConsoleActions);

  REPLConsole.currentSession = this;
};

// Add CSS styles dynamically. This probably doesnt work for IE <8.
REPLConsole.prototype.insertCss = function() {
  if (document.getElementById(styleElementId)) {
    return; // already inserted
  }
  var style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = consoleStyleCss;
  style.id = styleElementId;
  document.getElementsByTagName('head')[0].appendChild(style);
};

REPLConsole.prototype.focus = function() {
  if (! this.focused) {
    this.focused = true;
    if (! hasClass(this.inner, "console-focus")) {
      addClass(this.inner, "console-focus");
    }
    this.scrollToBottom();
  }
};

REPLConsole.prototype.blur = function() {
  this.focused = false;
  removeClass(this.inner, "console-focus");
};

/**
 * Add a new empty prompt box to the console.
 */
REPLConsole.prototype.newPromptBox = function() {
  // Remove the caret from previous prompt display if any.
  if (this.promptDisplay) {
    this.removeCaretFromPrompt();
  }

  var promptBox = document.createElement('div');
  promptBox.className = "console-prompt-box";
  promptBox.innerHTML = promptBoxHtml;
  this.promptLabel = promptBox.getElementsByClassName('console-prompt-label')[0];
  this.promptDisplay = promptBox.getElementsByClassName('console-prompt-display')[0];
  // Render the prompt box
  this.setInput("");
  this.promptLabel.innerHTML = this.prompt;
  this.inner.appendChild(promptBox);
  this.scrollToBottom();
};

/**
 * Remove the caret from the prompt box,
 * mainly before adding a new prompt box.
 * For simplicity, just re-render the prompt box
 * with caret position -1.
 */
REPLConsole.prototype.removeCaretFromPrompt = function() {
  this.setInput(this._input, -1);
};

REPLConsole.prototype.getSuggestion = function(keyword) {
  var self = this;

  function show(found) {
    if (!found) return;
    var hint = self.promptDisplay.childNodes[1];
    hint.className = 'console-hint';
    hint.dataset.keyword = found;
    hint.innerText = found.substr(self.suggestKeyword.length);
    // clear hinting information after timeout in a few time 
    if (self.suggestTimeout) clearTimeout(self.suggestTimeout);
    self.suggestTimeout = setTimeout(function() { self.renderInput() }, self.suggestWait);
  }

  function find(context) {
    var k = self.suggestKeyword;
    for (var i = 0; i < context.length; ++i) if (context[i].substr(0, k.length) === k) {
      if (context[i] === k) return;
      return context[i];
    }
  }

  function request(keyword, callback) {
    self.contextRequest(keyword, function(err, res) {
      if (err) throw new Error(err);
      var c = flatten(res['context']);
      c.sort();
      callback(c);
    });
  }

  self.suggestKeyword = keyword;
  var input = getContext(keyword);
  if (keyword.length - input.length < 3) return;

  if (self.suggestInput !== input) {
    self.suggestInput = input;
    request(keyword, function(c) {
      show(find(self.suggestContext = c));
    });
  } else if (self.suggestContext) {
    show(find(self.suggestContext));
  }
};

REPLConsole.prototype.getHintKeyword = function() {
  var hint = this.promptDisplay.childNodes[1];
  return hint.className === 'console-hint' && hint.dataset.keyword;
};

REPLConsole.prototype.setInput = function(input, caretPos) {
  if (input == null) return; // keep value if input is undefined
  this._caretPos = caretPos === undefined ? input.length : caretPos;
  this._input = input;
  if (this.autocomplete) this.autocomplete.refine(this.getCurrentWord());
  this.renderInput();
  if (!this.autocomplete && input.length == this._caretPos) this.getSuggestion(this.getCurrentWord());
};

/**
 * Add some text to the existing input.
 */
REPLConsole.prototype.addToInput = function(val, caretPos) {
  caretPos = caretPos || this._caretPos;
  var before = this._input.substring(0, caretPos);
  var after = this._input.substring(caretPos, this._input.length);
  var newInput =  before + val + after;
  this.setInput(newInput, caretPos + val.length);
};

/**
 * Render the input prompt. This is called whenever
 * the user input changes, sometimes not very efficient.
 */
REPLConsole.prototype.renderInput = function() {
  // Clear the current input.
  removeAllChildren(this.promptDisplay);

  var before, current, after;
  var center = document.createElement('span');

  if (this._caretPos < 0) {
    before = this._input;
    current = after = "";
  } else if (this._caretPos === this._input.length) {
    before = this._input;
    current = "\u00A0";
    after = "";
  } else {
    before = this._input.substring(0, this._caretPos);
    current = this._input.charAt(this._caretPos);
    after = this._input.substring(this._caretPos + 1, this._input.length);
  }

  this.promptDisplay.appendChild(document.createTextNode(before));
  this.promptDisplay.appendChild(center);
  this.promptDisplay.appendChild(document.createTextNode(after));

  var hint = this.autocomplete && this.autocomplete.getSelectedWord();
  addClass(center, hint ? 'console-hint' : 'console-cursor');
  center.appendChild(document.createTextNode(hint ? hint.substr(this.getCurrentWord().length) : current));
};

REPLConsole.prototype.writeOutput = function(output) {
  var consoleMessage = document.createElement('pre');
  consoleMessage.className = "console-message";
  consoleMessage.innerHTML = escapeHTML(output);
  this.inner.appendChild(consoleMessage);
  this.newPromptBox();
  return consoleMessage;
};

REPLConsole.prototype.writeError = function(output) {
  var consoleMessage = this.writeOutput(output);
  addClass(consoleMessage, "error-message");
  return consoleMessage;
};

REPLConsole.prototype.onEnterKey = function() {
  var input = this._input;

  if(input != "" && input !== undefined) {
    this.commandStorage.addCommand(input);
  }

  this.commandHandle(input);
};

REPLConsole.prototype.onTabKey = function() {
  var self = this;

  var hintKeyword;
  if (hintKeyword = self.getHintKeyword()) {
    self.swapCurrentWord(hintKeyword);
    return;
  }

  if (self.autocomplete) return;
  self.autocomplete = new Autocomplete([]);

  self.contextRequest(self.getCurrentWord(), function(err, obj) {
    if (err) return self.autocomplete = false;
    self.autocomplete = new Autocomplete(obj['context'], self.getCurrentWord());
    self.inner.appendChild(self.autocomplete.view);
    self.autocomplete.onFinished(function(word) {
      self.swapCurrentWord(word);
      self.autocomplete = false;
    });
    self.scrollToBottom();
  });
};

REPLConsole.prototype.onNavigateHistory = function(offset) {
  var command = this.commandStorage.navigate(offset) || "";
  this.setInput(command);
};

/**
 * Handle control keys like up, down, left, right.
 */
REPLConsole.prototype.onKeyDown = function(ev) {
  if (this.autocomplete && this.autocomplete.onKeyDown(ev)) {
    this.renderInput();
    ev.preventDefault();
    ev.stopPropagation();
    return;
  }

  switch (ev.keyCode) {
    case 69:
      // Ctrl-E
      if (ev.ctrlKey) {
        this.onTabKey();
        ev.preventDefault();
      }
      break;
    case 9:
      // Tab
      this.onTabKey();
      ev.preventDefault();
      break;
    case 13:
      // Enter key
      this.onEnterKey();
      ev.preventDefault();
      break;
    case 80:
      // Ctrl-P
      if (! ev.ctrlKey) break;
    case 38:
      // Up arrow
      this.onNavigateHistory(-1);
      ev.preventDefault();
      break;
    case 78:
      // Ctrl-N
      if (! ev.ctrlKey) break;
    case 40:
      // Down arrow
      this.onNavigateHistory(1);
      ev.preventDefault();
      break;
    case 37:
      // Left arrow
      var caretPos = this._caretPos > 0 ? this._caretPos - 1 : this._caretPos;
      this.setInput(this._input, caretPos);
      ev.preventDefault();
      break;
    case 39:
      // Right arrow
      var length = this._input.length;
      var caretPos = this._caretPos < length ? this._caretPos + 1 : this._caretPos;
      this.setInput(this._input, caretPos);
      ev.preventDefault();
      break;
    case 8:
      // Delete
      this.deleteAtCurrent();
      ev.preventDefault();
      break;
    default:
      break;
  }

  if (ev.ctrlKey || ev.metaKey) {
    // Set focus to our clipboard in case they hit the "v" key
    this.clipboard.focus();
    if (ev.keyCode == 86) {
      // Pasting to clipboard doesn't happen immediately,
      // so we have to wait for a while to get the pasted text.
      var _this = this;
      setTimeout(function() {
        _this.addToInput(_this.clipboard.value);
        _this.clipboard.value = "";
        _this.clipboard.blur();
      }, 10);
    }
  }

  ev.stopPropagation();
};

/**
 * Handle input key press.
 */
REPLConsole.prototype.onKeyPress = function(ev) {
  // Only write to the console if it's a single key press.
  if (ev.ctrlKey || ev.metaKey) { return; }
  var keyCode = ev.keyCode || ev.which;
  this.insertAtCurrent(String.fromCharCode(keyCode));
  ev.stopPropagation();
  ev.preventDefault();
};

/**
 * Delete a character at the current position.
 */
REPLConsole.prototype.deleteAtCurrent = function() {
  if (this._caretPos > 0) {
    var caretPos = this._caretPos - 1;
    var before = this._input.substring(0, caretPos);
    var after = this._input.substring(this._caretPos, this._input.length);
    this.setInput(before + after, caretPos);

    if (!this._input) {
      this.autocomplete && this.autocomplete.cancel();
      this.autocomplete = false;
    }
  }
};

/**
 * Insert a character at the current position.
 */
REPLConsole.prototype.insertAtCurrent = function(char) {
  var before = this._input.substring(0, this._caretPos);
  var after = this._input.substring(this._caretPos, this._input.length);
  this.setInput(before + char + after, this._caretPos + 1);
};

REPLConsole.prototype.swapCurrentWord = function(next) {
  function right(s, pos) {
    var x = s.indexOf(' ', pos);
    return x === -1 ? s.length : x;
  }

  function swap(s, pos) {
    return s.substr(0, s.lastIndexOf(' ', pos) + 1) + next + s.substr(right(s, pos))
  }

  if (!next) return;
  var swapped = swap(this._input, this._caretPos);
  this.setInput(swapped, this._caretPos + swapped.length - this._input.length);
};

REPLConsole.prototype.getCurrentWord = function() {
  return (function(s, pos) {
    var left = s.lastIndexOf(' ', pos);
    if (left === -1) left = 0;
    var right = s.indexOf(' ', pos)
    if (right === -1) right = s.length - 1;
    return s.substr(left, right - left + 1).replace(/^\s+|\s+$/g,'');
  })(this._input, this._caretPos);
};

REPLConsole.prototype.scrollToBottom = function() {
  this.outer.scrollTop = this.outer.scrollHeight;
};

// Change the binding of the console
REPLConsole.prototype.switchBindingTo = function(frameId, callback) {
  var url = this.getSessionUrl('trace');
  var params = "frame_id=" + encodeURIComponent(frameId);
  postRequest(url, params, callback);
};

/**
 * Install the console into the element with a specific ID.
 * Example: REPLConsole.installInto("target-id")
 */
REPLConsole.installInto = function(id, options) {
  var consoleElement = document.getElementById(id);

  options = options || {};

  for (var prop in consoleElement.dataset) {
    options[prop] = options[prop] || consoleElement.dataset[prop];
  }

  var replConsole = new REPLConsole(options);
  replConsole.install(consoleElement);
  return replConsole;
};

// This is to store the latest single session, and the stored session
// is updated by the REPLConsole#install() method.
// It allows to operate the current session from the other scripts.
REPLConsole.currentSession = null;

// This line is for the Firefox Add-on, because it doesn't have XMLHttpRequest as default.
// And so we need to require a module compatible with XMLHttpRequest from SDK.
REPLConsole.XMLHttpRequest = typeof XMLHttpRequest === 'undefined' ? null : XMLHttpRequest;

REPLConsole.request = function request(method, url, params, callback) {
  var xhr = new REPLConsole.XMLHttpRequest();

  xhr.open(method, url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xhr.setRequestHeader("Accept", "application/vnd.web-console.v2");
  xhr.send(params);

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      callback(xhr);
    }
  };
};

// DOM helpers
function hasClass(el, className) {
  var regex = new RegExp('(?:^|\\s)' + className + '(?!\\S)', 'g');
  return el.className && el.className.match(regex);
}

function isNodeList(el) {
  return typeof el.length === 'number' &&
    typeof el.item === 'function';
}

function addClass(el, className) {
  if (isNodeList(el)) {
    for (var i = 0; i < el.length; ++ i) {
      addClass(el[i], className);
    }
  } else if (!hasClass(el, className)) {
    el.className += " " + className;
  }
}

function removeClass(el, className) {
  var regex = new RegExp('(?:^|\\s)' + className + '(?!\\S)', 'g');
  el.className = el.className.replace(regex, '');
}

function removeAllChildren(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

function findChild(el, className) {
  for (var i = 0; i < el.childNodes.length; ++ i) {
    if (hasClass(el.childNodes[i], className)) {
      return el.childNodes[i];
    }
  }
}

function escapeHTML(html) {
  return html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/`/g, '&#x60;');
}

// XHR helpers
function postRequest() {
  REPLConsole.request.apply(this, ["POST"].concat([].slice.call(arguments)));
}

function putRequest() {
  REPLConsole.request.apply(this, ["PUT"].concat([].slice.call(arguments)));
}

if (typeof exports === 'object') {
  exports.REPLConsole = REPLConsole;
} else {
  window.REPLConsole = REPLConsole;
}

// Split string by module operators of ruby
function getContext(s) {
  var methodOp = s.lastIndexOf('.');
  var moduleOp = s.lastIndexOf('::');
  var x = methodOp > moduleOp ? methodOp : moduleOp;
  return x !== -1 ? s.substr(0, x) : '';
}

function flatten(arrays) {
  return Array.prototype.concat.apply([], arrays);
}

}).call(this);
</script>

<script type="text/javascript" data-template="main">
(function() {
  REPLConsole.installInto('console');

}).call(this);
</script>


  <script type="text/javascript" data-template="error_page">
(function() {
  // Try intercept traces links in Rails 4.2.
var traceFrames = document.getElementsByClassName('trace-frames');
var selectedFrame, currentSource = document.getElementById('frame-source-0');

// Add click listeners for all stack frames
for (var i = 0; i < traceFrames.length; i++) {
  traceFrames[i].addEventListener('click', function(e) {
    e.preventDefault();
    var target = e.target;
    var frameId = target.dataset.frameId;

    // Change the binding of the console.
    changeBinding(frameId, function() {
      if (selectedFrame) {
        selectedFrame.className = selectedFrame.className.replace("selected", "");
      }

      target.className += " selected";
      selectedFrame = target;
    });

    // Change the extracted source code
    changeSourceExtract(frameId);
  });
}

function changeBinding(frameId, callback) {
  REPLConsole.currentSession.switchBindingTo(frameId, callback);
}

function changeSourceExtract(frameId) {
  var el = document.getElementById('frame-source-' + frameId);
  if (currentSource && el) {
    currentSource.className += " hidden";
    el.className = el.className.replace(" hidden", "");
    currentSource = el;
  }
}

// Push the error page body upwards the size of the console.
//
// While, I wouldn't like to do that on every custom page (so I don't screw
// user's layouts), I think a lot of developers want to see all of the content
// on the default Rails error page.
//
// Since it's quite special as is now, being a bit more special in the name of
// better user experience, won't hurt.
document.addEventListener('DOMContentLoaded', function() {
  var consoleElement = document.getElementById('console');
  var resizerElement = consoleElement.getElementsByClassName('resizer')[0];
  var containerElement = document.getElementById('container');

  function setContainerElementBottomMargin(pixels) {
    containerElement.style.marginBottom = pixels + 'px';
  }

  var currentConsoleElementHeight = consoleElement.offsetHeight;
  setContainerElementBottomMargin(currentConsoleElementHeight);

  resizerElement.addEventListener('mousedown', function(event) {
    function recordConsoleElementHeight(event) {
      resizerElement.removeEventListener('mouseup', recordConsoleElementHeight);

      var currentConsoleElementHeight = consoleElement.offsetHeight;
      setContainerElementBottomMargin(currentConsoleElementHeight);
    }

    resizerElement.addEventListener('mouseup', recordConsoleElementHeight);
  });
});

}).call(this);
</script>

</body>
</html>
